<script setup lang="ts">
  const content = await useAsyncData(() => queryContent('/projects/engineering').sort({ date: -1 }).find()).then(({ data }) => data);
</script>


<template>
  <ProjectPage v-if="content" title="Engineering Projects" :content="content" />
</template>