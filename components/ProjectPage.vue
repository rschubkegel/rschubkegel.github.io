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
      <IconLeftArrow />
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