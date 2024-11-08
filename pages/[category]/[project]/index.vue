<script setup lang="ts">
  const route = useRoute();
  const { category, project } = route.params;
  if (typeof category !== 'string') throw Error('Project pages must have one category defined.');
  if (typeof project !== 'string') throw Error('Project pages must have one project defined.');
  const { data: content } = await useAsyncData(
    () => queryContent(`/categories/${category}/${project}`).findOne()
  );
</script>


<template>
  <div v-if="content">

    <!-- INTRO -->
    <section>
      <h1>{{ content.title }}</h1>
      <a :href="`/${category}`">
        <IconLeftArrow />
        <em>{{ category }}</em>
      </a>
    </section>

    <!-- TABLE OF CONTENTS -->
    <TableOfContents
      v-if="content"
      :section-titles="[]"
      :visible-sections="[]"
    />

    <!-- CONTENT -->
    <ContentRenderer v-if="content" :value="content" />

  </div>
  <div v-else style="text-align: center">
    <h2>Uh oh!</h2>
    <p>Looks like this page doesn't exist 🙈</p>
  </div>
</template>


<style scoped lang="scss">
  /* WARNING: copied from ProjectPage.vue */
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

  /* WARNING: this should be done better */
  @media (min-width: 42rem) {
    #table-of-contents {
      display: none;
    }
  }
</style>