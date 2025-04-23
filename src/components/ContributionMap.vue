<template>
	<div class="contribution-map">
		<div ref="chartContainer" class="chart-container">
			<div v-if="loading" class="placeholder"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
import { createClient, fetchExchange } from '@urql/core';

interface ContributionDay {
	contributionCount: number;
	date: string;
}

interface Week {
	contributionDays: ContributionDay[];
}

interface ContributionCalendar {
	totalContributions: number;
	weeks: Week[];
}

const chartContainer = ref<HTMLElement | null>(null);
const loading = ref(true);
const username = 'rschubkegel';

// GraphQL client setup
const client = createClient({
	url: 'https://api.github.com/graphql',
	fetchOptions: () => {
		return {
			headers: {
				Authorization: `Bearer ${import.meta.env.PUBLIC_GITHUB_TOKEN}`,
			},
		};
	},
	exchanges: [fetchExchange],
});

// GraphQL query to fetch contribution data
const query = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const fetchContributions = async (username: string): Promise<ContributionCalendar | null> => {
	const oneYearAgo = new Date();
	oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
	
	const result = await client.query(query, {
		username,
		from: oneYearAgo.toISOString(),
		to: new Date().toISOString(),
	});
	
	return result.data?.user?.contributionsCollection?.contributionCalendar;
};

const createChart = (data: ContributionCalendar) => {
	if (!chartContainer.value) return;
	
	const width = 634;
	const height = 82;
	const cellSize = 10;
	const cellPadding = 2;
	
	const svg = d3
	.select(chartContainer.value)
	.append('a')
	.attr('href', `https://github.com/${username}`)
	.attr('target', '_blank')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.attr('viewBox', `0 0 ${width} ${height}`)
	.style('width', '100%')
	.style('height', 'auto')
	.append('g');
	
	// Create color scale
	const colorScale = d3
	.scaleThreshold<number, string>()
	.domain([5, 10, 15, 20])
	.range([
		'var(--color-github-muted)',
		'var(--color-github-medium)',
		'var(--color-github-dark)',
		'var(--color-github-darker)',
	]);
	
	// Create week groups
	const weekGroups = svg
	.selectAll('.week')
	.data(data.weeks)
	.enter()
	.append('g')
	.attr('class', 'week')
	.attr('transform', (_d: Week, i: number) => `translate(${i * (cellSize + cellPadding)}, 0)`);
	
	// Create day rectangles
	weekGroups
	.selectAll('.day')
	.data((d: Week) => d.contributionDays)
	.enter()
	.append('rect')
	.attr('class', 'day')
	.attr('width', cellSize)
	.attr('height', cellSize)
	.attr('y', (_d: ContributionDay, i: number) => i * (cellSize + cellPadding))
	.attr('fill', (d: ContributionDay) => colorScale(d.contributionCount))
	.attr('rx', 2)
	.append('title')
	.text((d: ContributionDay) => `${d.date}: ${d.contributionCount} contributions`);
};

onMounted(async () => {
	try {
		const data = await fetchContributions(username);
		if (data) {
			createChart(data);
		}
	} finally {
		loading.value = false;
	}
});
</script>

<style scoped>
.contribution-map {
	width: 100%;
}

.chart-container {
	width: 100%;
	position: relative;
}

.placeholder {
	width: 100%;
	height: auto;
	aspect-ratio: 634 / 82;
	background-color: var(--color-github-muted);
	border-radius: 4px;
}

.day {
	transition: fill 0.2s ease;
}

.day:hover {
	stroke: #000;
	stroke-width: 1;
}
</style> 