<script setup>
  const contentSections = {
    'Web Development': await useAsyncData(() => queryContent('/projects/web').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
    // 'Engineering': await useAsyncData(() => queryContent('/projects/engineering').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
    'Game Development': await useAsyncData(() => queryContent('/projects/games').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
    'Visual Arts': await useAsyncData(() => queryContent('/projects/art').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
    'Music': await useAsyncData(() => queryContent('/projects/music').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
  };
</script>

<template>
  <main class="container">

    <!-- LOGO -->
    <section class="logo-container">
      <TheLogo id="logo" />
    </section>

    <!-- INTRO -->
    <section>
      <h1>Hello, I&apos;m Rylan</h1>
      <p>
        I&apos;m a web developer that is passionate about programming, art, and coffee.
        This site represents a small selection of my personal and professional work.
        Feel free to reach out via <a href="mailto:rylanschubkegel@gmail.com" target="_blank">email</a>
        or <a href="https://github.com/rschubkegel/" target="_blank">LinkedIn</a>, I would love to connect!
      </p>
    </section>

    <!-- CONTENT SECTIONS -->
    <HomeSection
      v-for="(v, k) in contentSections"
      :key="k"
      :title="k"
      :content="v.value"
    />

  </main>
</template>

<style scoped lang="scss">
  .container {
    max-width: var(--content-w);
    margin: auto;
  }
  .logo-container {
    width: max-content;
    margin: auto;
    margin-top: 4rem;
  }
</style>