<script setup lang="ts">
import gsap from 'gsap';
import { ref, watch } from 'vue';

const props = defineProps<{
	/**
	* The number of taps required to change which slot is rendered.
	*/
	taps: number;
}>();

const tapCount = ref(0);

const container = ref<SVGElement>();

const isAlternateVisible = ref(false);

const animatePulse = (scale = 1.05) => {
	if (!container.value) return;
	gsap
	.timeline()
	.to(container.value, {
		scaleX: scale,
		scaleY: 1 / scale,
		duration: 0.07,
		ease: 'power2.out',
	})
	.to(container.value, {
		scaleX: 1,
		scaleY: 1,
		duration: 0.25,
		ease: 'power3.out',
	});
};

watch(tapCount, value => {
	if (props.taps > 0) {
		if (value > 0 && value < props.taps) {
			animatePulse(1 + Math.max(0, (value / props.taps) * 0.2));
		}
		if (value >= Math.max(props.taps, 0)) {
			isAlternateVisible.value = true;
			tapCount.value = -1;
		} else if (value === 0) {
			isAlternateVisible.value = false;
		}
	}
});
</script>

<template>
	<div ref="container" class="toggleable-element" @click.prevent="tapCount++">
		<div :class="{ hidden: isAlternateVisible }">
			<slot name="default"></slot>
		</div>
		<div :class="{ hidden: !isAlternateVisible }">
			<slot name="alternate"></slot>
		</div>
	</div>
</template>

<style lang='scss' scoped>
	.toggleable-element {
		position: relative;
		cursor: pointer;

		:deep(.hidden) {
			svg {
				opacity: 0;
				scale: .25;
				
				&:nth-child(even) {
					translate: 0 2rem;
				}
				
				&:nth-child(odd) {
					translate: 0 -2rem;
				}
			}
		}
		
		:deep(svg) {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: contain;
			transition: var(--transition);
		}
		
		:deep(path) {
			fill: var(--color-primary-muted);
		}
	}
</style>