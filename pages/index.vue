<script setup>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { TextPlugin } from 'gsap/TextPlugin';
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const contentSections = [
    {
      title: 'Web Development',
      content: await useAsyncData(() => queryContent('/projects/web').where({ home: { $ne: false } }).sort({ date: -1 }).find()).then(({ data }) => data),
      page: '/web',
    },
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

  const visibleSections = ref([]);

  function addSection(section) {
    visibleSections.value.push(section);
  }

  function removeSection(section) {
    visibleSections.value = visibleSections.value.filter(s => s !== section);
  }

  onMounted(() => {
    // WARNING: hard-coded (see :root vars)
    gsap.matchMedia().add(
      {
        isMobile: '(max-width: 42rem)',
        isDesktop: '(min-width: 42rem)'
      },
      context => {
        const { isMobile } = context.conditions;
        gsap.to('h1', {
          duration: 2.5,
          text: `${ isMobile ? "Hi" : "Hello world" }, I'm Rylan`,
          ease: 'linear',
          scrollTrigger: 'h1'
        });
      }
    );
  });
</script>


<template>

  <!-- LOGO -->
  <section class="logo-container">
    <TheLogo id="logo" :taps-for-qr="1" />
  </section>

  <!-- INTRO -->
  <section>
    <h1></h1>
    <p>
      I&apos;m a web developer that is passionate about programming, art, and coffee.
      This site represents a small selection of my personal and professional work.
      Feel free to connect on <a href="https://github.com/rschubkegel/" target="_blank">LinkedIn</a>
      for service inquiries or just to chat!
    </p>
  </section>

  <!-- TABLE OF CONTENTS -->
  <TableOfContents :section-titles="contentSections.map(({ title }) => title)" :visible-sections="visibleSections">
    <template #default="{ title, href, visible, onLinkClicked }">
      <a
        :href="href"
        :class="{ visible: visible }"
        @click="onLinkClicked">
        {{ title.replace('Development', 'Dev') }}
      </a>
    </template>
  </TableOfContents>

  <!-- CONTENT SECTIONS -->
  <HomeSection
    v-for="section in contentSections"
    :key="section.title"
    :title="section.title"
    :content="section.content.value"
    :page="section.page"
    @enter="addSection(section.title)"
    @leave="removeSection(section.title)"
  />

</template>


<style scoped lang="scss">
  h1 {
    min-height: 3rem; // prevent CLS
  }
  .logo-container {
    width: max-content;
    margin: auto;
    margin-top: calc(var(--spacing) * 4);
  }
</style>