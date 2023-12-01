<script setup lang="ts">
  const content = await useAsyncData(() => queryContent('/projects/games/out-of-thyme').findOne()).then(({ data }) => data);
</script>


<template>
  <h1>Out of Thyme</h1>
  <ContentRenderer v-if="content" :value="content" />
</template>