<script setup lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    document
      .querySelectorAll('img')
      .forEach(img => img.addEventListener('load', ScrollTrigger.refresh));
  });
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style src="~/assets/styles/main.sass"></style>