<script setup lang="ts">
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';

  defineProps<{
    title: string;
    content: ParsedContent[] | null;
  }>();
</script>


<template>
  <section>
    <header class="sticky-header">
      <h2>{{ title }}</h2>
    </header>
    <div v-for="data in content">
      <h3>
        <a v-if="data.href" :href="data.href" target="_blank">{{ data.title }}</a>
        <span v-else>{{ data.title }}</span>
      </h3>
      <ContentRenderer :value="data" :excerpt="Boolean(data.excerpt)" />
    </div>
  </section>
</template>


<style scoped lang="scss">
  section:not(:last-child) {
    margin-bottom: 1rem;
    .sticky-header {
      position: sticky;
      top: -1px;
      background-color: var(--color-bg-bold);
      border: 1px solid var(--color-bg-mild);
      border-left-width: 0px;
      border-right-width: 0px;
      margin-top: 2rem;
      h2 {
        margin: .75em 0;
      }
    }
  }
</style>