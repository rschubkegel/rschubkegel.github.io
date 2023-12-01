<script setup lang="ts">
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';

  defineProps<{
    title: string;
    content: ParsedContent[];
  }>();
</script>


<template>

  <!-- INTRO -->
  <section>
    <h1>{{ title }}</h1>
  </section>

  <!-- TABLE OF CONTENTS -->
  <TableOfContents v-if="content" :section-titles="content.map(c => c.title ?? '')" />

  <!-- CONTENT -->
  <section v-for="data in content" :id="data.title?.toLowerCase().replaceAll(' ', '-')">
    <header class="sticky-header">
      <h3 :class="{ 'pretty-header': data.link || data.page }">
        <a v-if="data.link" :href="data.link" target="_blank">{{ data.title }}</a>
        <a v-else-if="data.page" :href="data.page">{{ data.title }}</a>
        <span v-else>{{ data.title }}</span>
      </h3>
    </header>
    <ContentRenderer :value="data" :excerpt="Boolean(data.excerpt)" />
  </section>

</template>


<style scoped lang="scss">
  .sticky-header {
    top: 3rem;
  }
  section:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>