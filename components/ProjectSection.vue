<script setup lang="ts">
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const emit = defineEmits<{
    (e: 'enter'): void;
    (e: 'leave'): void;
    (e: 'enterBack'): void;
    (e: 'leaveBack'): void;
  }>();

  const props = defineProps<{
    title: string;
    content: ParsedContent;
    link?: string;
  }>();

  const id = props.title.toLowerCase().replaceAll(' ', '-');

  onMounted(() => {
    ScrollTrigger.create({
      trigger: `#${ id }`,
      start: 'top center+=200',
      end: 'bottom center-=200',
      onEnter: () => emit('enter'),
      onLeave: () => emit('leave'),
      onEnterBack: () => emit('enterBack'),
      onLeaveBack: () => emit('leaveBack'),
    });
  });
</script>


<template>
  <section :id="id">
    <header class="sticky-header">
      <h2 :class="{ 'pretty-header': Boolean(link) }">
        <a v-if="link" :href="link" target="_blank">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h2>
    </header>
    <div>
      <h3 :class="{ 'pretty-header': content.link || content.page }">
        <a v-if="content.link" :href="content.link" target="_blank">{{ content.title }}</a>
        <a v-else-if="content.page" :href="content.page">{{ content.title }}</a>
        <span v-else>{{ content.title }}</span>
      </h3>
      <ContentRenderer :value="content" :excerpt="Boolean(content.excerpt)" />
    </div>
  </section>
</template>


<style scoped lang="scss">
  section:not(:last-child) {
    margin-bottom: var(--spacing);
  }
</style>