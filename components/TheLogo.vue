<script setup lang="ts">
  import gsap from 'gsap';

  const props = defineProps<{
    /**
     * If set to a positive number, the logo will transform into a QR code
     * when tapped the specified number of times.
     */
    tapsForQr: 0;
  }>();

  const taps = ref(0);

  const container = ref<SVGElement>();

  const isQrVisible = ref(false);

  const animatePulse = (scale = 1.05) => {
    if (!container.value) return;
    gsap
      .timeline()
      .to(container.value, {
        scale,
        duration: 0.1,
        ease: 'power1.out',
      })
      .to(container.value, {
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
  };

  watch(taps, value => {
    if (props.tapsForQr > 0) {
      if (value > 0 && value < props.tapsForQr) {
        animatePulse(1 + Math.max(0, (value / props.tapsForQr) * 0.3));
      }
      if (value >= Math.max(props.tapsForQr, 0)) {
        isQrVisible.value = true;
        taps.value = -1;
      } else if (value === 0) {
        isQrVisible.value = false;
      }
    }
  });
</script>

<template>
  <div ref="container" class="qr-logo" @click="taps++">
    <IconRylan :class="{ hidden: isQrVisible }" />
    <IconQR :class="{ hidden: !isQrVisible }" />
  </div>
</template>

<style lang='scss' scoped>
  .qr-logo {
    position: relative;
    width: 8rem;
    height: 8rem;
    cursor: pointer;

    svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 300ms;

      &.hidden {
        opacity: 0;
        scale: .25;

        &:nth-child(even) {
          translate: 0 2rem;
        }

        &:nth-child(odd) {
          translate: 0 -2rem;
        }
      }
    }

    :deep(path) {
      fill: var(--color-splash-mild);
    }
  }
</style>