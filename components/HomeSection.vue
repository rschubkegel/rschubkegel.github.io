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
    content: ParsedContent[] | null;
    page?: string;
  }>();

  const id = props.title.toLowerCase().replaceAll(' ', '-');

  onMounted(() => {
    ScrollTrigger.create({
      trigger: `#${ id }`,
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
      <h2 :class="{ 'pretty-header': Boolean(page) }">
        <a v-if="page" :href="page">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h2>
    </header>
    <div v-for="data in content">
      <h3 :class="{ 'pretty-header': data.link || data.page }">
        <a v-if="data.link" :href="data.link" target="_blank">{{ data.title }}</a>
        <a v-else-if="data.page" :href="data.page">{{ data.title }}</a>
        <span v-else>{{ data.title }}</span>
      </h3>
      <ContentRenderer :value="data" :excerpt="Boolean(data.excerpt)" />
    </div>
  </section>
</template>


<style scoped lang="scss">
  section:not(:last-child) {
    margin-bottom: 1rem;
  }
</style>