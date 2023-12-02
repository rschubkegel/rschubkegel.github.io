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
  <div id="noise-overlay"></div>
  <div id="gradient-overlay" class="first"></div>
  <div id="gradient-overlay" class="second"></div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<style src="~/assets/styles/main.sass"></style>
<style scoped lang="scss">
  [id$="-overlay"] {
    position: fixed;
    inset: 0;
    z-index: 1000;
    pointer-events: none;
  }
  #noise-overlay {
    background-image: url('/images/static.png');
    background-repeat: repeat;
    background-size: 600px;
    opacity: .05;
  }
  #gradient-overlay {
    mix-blend-mode: color-dodge;
    &.first {
      background: radial-gradient(ellipse at 15% 75%, rgba(78,168,89,1) 0%, rgba(65,68,62,0) 45%);
      opacity: .25;
    }
    &.second {
      background: radial-gradient(ellipse at 85% 15%, rgba(78,168,89,1) 0%, rgba(65,68,62,0) 35%);
      opacity: .15;
    }
  }
</style>