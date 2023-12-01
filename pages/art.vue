<script setup lang="ts">
  const content = await useAsyncData(() => queryContent('/projects/art').sort({ date: -1 }).find()).then(({ data }) => data);
</script>


<template>
  <ProjectPage v-if="content" title="Visual Art" :content="content" />
</template>