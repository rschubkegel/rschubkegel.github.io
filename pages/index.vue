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

    <!-- TABLE OF CONTENTS -->
    <section class="table-of-contents">
      <ul>
        <li v-for="(_v, k) in contentSections">
          <a :href="`#${ k.toLowerCase().replaceAll(' ', '-') }`">{{ k }}</a>
        </li>
      </ul>
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
  .table-of-contents {
    z-index: 1;
    position: sticky;
    top: -1px;
    background-color: var(--color-bg-bold);
    outline: 1px solid var(--color-bg-bold);
    margin: 2rem 0 1rem;
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      margin: 0;
      padding: 1rem 0;
    }
  }
</style>