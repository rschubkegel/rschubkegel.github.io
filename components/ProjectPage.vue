<script setup lang="ts">
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';

  defineProps<{
    title: string;
    content: ParsedContent[];
  }>();

  const visibleSections = ref<string[]>([]);

  function addSection(section: string) {
    visibleSections.value.push(section);
  }

  function removeSection(section: string) {
    visibleSections.value = visibleSections.value.filter(s => s !== section);
  }
</script>


<template>

  <!-- INTRO -->
  <section>
    <h1>{{ title }}</h1>
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      <em>return home</em>
    </a>
  </section>

  <!-- TABLE OF CONTENTS -->
  <TableOfContents
    v-if="content"
    :section-titles="content.map(c => c.title ?? '')"
    :visible-sections="visibleSections"
  />

  <!-- CONTENT -->
  <ProjectSection
    v-for="section in content"
    :key="section.title"
    :title="section.title ?? ''"
    :content="section"
    @enter="addSection(section.title ?? '')"
    @enter-back="addSection(section.title ?? '')"
    @leave="removeSection(section.title ?? '')"
    @leave-back="removeSection(section.title ?? '')"
  />

</template>


<style scoped lang="scss">
  a {
    line-height: 1;
    display: flex;
    gap: .5em;
    align-items: center;
    margin: auto;
    translate: 0 calc(var(--spacing) / -2);
    width: max-content;
    font-weight: 100;
    &:not(:is(:hover, :active, :focus)) {
      opacity: .5;
    }
    svg {
      fill: currentColor;
    }
  }
  section:not(:last-child) {
    margin-bottom: var(--spacing);
  }
</style>