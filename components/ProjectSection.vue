<script setup lang="ts">
  import { stringToId } from '~/utils/StringToId';

  const emit = defineEmits<{
    (e: 'enter'): void;
    (e: 'leave'): void;
  }>();

  const props = defineProps<{
    title: string;
    content: any;
  }>();

  const id = stringToId(props.title);

  function handleObserverEntries(entries: IntersectionObserverEntry[]) {
    if (entries.at(0)?.isIntersecting) emit('enter');
    else emit('leave');
  }

  onMounted(() => {
    const el = document.querySelector<HTMLElement>(`#${ id }`);
    if (el) {
      const observer = new IntersectionObserver(handleObserverEntries);
      handleObserverEntries(observer.takeRecords());
      observer.observe(el);
    }
  });
</script>


<template>
  <section :id="id">
    <header class="sticky-header">
      <h2 :class="{ 'pretty-header': content.link || content.page }">
        <a v-if="content.link" :href="content.link" target="_blank">
          {{ content.title }}
          <IconExternalLink />
        </a>
        <a v-else-if="content.page" :href="content.page">
          {{ content.title }}
          <IconEye />
        </a>
        <span v-else>{{ title }}</span>
      </h2>
    </header>
    <ContentRenderer :value="content" :excerpt="Boolean(content.excerpt)" />
  </section>
</template>


<style scoped lang="scss">
  section:not(:last-child) {
    margin-bottom: var(--spacing);
  }
</style>