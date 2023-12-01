<script setup lang="ts">
  const content = await useAsyncData(() => queryContent('/projects/web').sort({ date: -1 }).find()).then(({ data }) => data);
</script>


<template>
  <ProjectPage v-if="content" title="Web Development" :content="content" />
</template>