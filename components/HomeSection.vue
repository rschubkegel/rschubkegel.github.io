<script setup lang="ts">
  import { stringToId } from '~/utils/StringToId';

  const emit = defineEmits<{
    (e: 'enter'): void;
    (e: 'leave'): void;
  }>();

  const props = defineProps<{
    title: string;
    content: any[] | null;
    link?: string;
    page?: string;
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
      <h2 :class="{ 'pretty-header': link || page }">
        <a v-if="link" :href="link" target="_blank">
          {{ title }}
          <IconExternalLink />
        </a>
        <a v-else-if="page" :href="page">
          {{ title }}
          <IconEye />
        </a>
        <span v-else>{{ title }}</span>
      </h2>
    </header>
    <div v-for="data in content">
      <h3 :class="{ 'pretty-header': data.link || data.page }">
        <a v-if="data.link" :href="data.link" target="_blank">
          {{ data.title }}
          <IconExternalLink />
        </a>
        <a v-else-if="data.page" :href="data.page">
          {{ data.title }}
          <IconEye />
        </a>
        <span v-else>{{ data.title }}</span>
      </h3>
      <ContentRenderer :value="data" :excerpt="Boolean(data.excerpt)" />
    </div>
  </section>
</template>


<style scoped lang="scss">
  section:not(:last-child) {
    margin-bottom: var(--spacing);
  }
</style>