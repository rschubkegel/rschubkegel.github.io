<script setup>
  const contentSections = [
    {
      title: 'Web Development',
      content: await useAsyncData(() => queryContent('/projects/web').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
      page: '/web',
    },
    // {
    //   title: 'Engineering',
    //   content: await useAsyncData(() => queryContent('/projects/engineering').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
    // },
    {
      title: 'Game Development',
      content: await useAsyncData(() => queryContent('/projects/games').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
      page: '/games',
    },
    {
      title: 'Visual Art',
      content: await useAsyncData(() => queryContent('/projects/art').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
      page: '/art',
    },
    {
      title: 'Music',
      content: await useAsyncData(() => queryContent('/projects/music').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
    },
  ];
</script>


<template>

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
      Feel free to connect on <a href="https://github.com/rschubkegel/" target="_blank">LinkedIn</a>
      for service inquiries or just to chat!
    </p>
  </section>

  <!-- TABLE OF CONTENTS -->
  <TableOfContents :section-titles="contentSections.map(({ title }) => title)">
    <template #default="{ title, href }">
      <a :href="href">{{ title.replace('Development', 'Dev') }}</a>
    </template>
  </TableOfContents>

  <!-- CONTENT SECTIONS -->
  <HomeSection
    v-for="section in contentSections"
    :key="section.title"
    :title="section.title"
    :content="section.content.value"
    :page="section.page"
  />

</template>


<style scoped lang="scss">
  .logo-container {
    width: max-content;
    margin: auto;
    margin-top: 4rem;
  }
</style>