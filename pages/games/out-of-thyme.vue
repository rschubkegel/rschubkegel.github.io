<script setup lang="ts">
  const content = await useAsyncData(() => queryContent('/projects/games/out-of-thyme').findOne()).then(({ data }) => data);
</script>


<template>

  <!-- INTRO -->
  <section>
    <h1>Out of Thyme</h1>
    <a href="/games">
      <IconLeftArrow />
      <em>return to games</em>
    </a>
  </section>

  <!-- TABLE OF CONTENTS -->
  <TableOfContents
    v-if="content"
    :section-titles="[]"
    :visible-sections="[]"
  />

  <ContentRenderer v-if="content" :value="content" />
</template>


<style scoped>
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