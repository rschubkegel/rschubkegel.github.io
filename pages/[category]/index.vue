<script setup lang="ts">
  const route = useRoute();
  const category = route.params.category;
  if (typeof category !== 'string') throw Error('Category pages must have one category defined.');

  const { data: categoryData } = await useAsyncData(
    () => queryContent(`/categories/${category}`)
      .where({ _dir: 'categories' })
      .findOne()
  );

  const { data: projectData } = await useAsyncData(
    () => queryContent(`/categories/${category}`)
      .where({ _dir: { $eq: category } })
      .sort({ date: -1 })
      .find()
  );

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
    <h1>{{ categoryData?.name || capitalizeString(category) }}</h1>
    <a href="/">
      <IconLeftArrow />
      <em>home</em>
    </a>
  </section>

  <!-- ERROR -->
  <div v-if="!categoryData && !projectData?.length" style="text-align: center;">
    <h2>Uh oh!</h2>
    <p>Looks like this page doesn't exist 🙈</p>
  </div>

  <!-- INTRODUCTION -->
  <ContentRenderer v-if="categoryData" :value="categoryData" />

  <!-- TABLE OF CONTENTS -->
  <TableOfContents
    v-if="projectData?.length"
    :section-titles="projectData.map(c => c.title ?? '')"
    :visible-sections="visibleSections"
  />

  <!-- CONTENT -->
  <ProjectSection
    v-for="section in projectData"
    :key="section.title"
    :title="section.title ?? ''"
    :content="section"
    @enter="addSection(section.title ?? '')"
    @leave="removeSection(section.title ?? '')"
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