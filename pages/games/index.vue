<script setup lang="ts">
  const content = await useAsyncData(() => queryContent('/projects/games').sort({ date: -1 }).find()).then(({ data }) => data);
</script>


<template>
  <ProjectPage v-if="content" title="Game Development" :content="content" />
</template>