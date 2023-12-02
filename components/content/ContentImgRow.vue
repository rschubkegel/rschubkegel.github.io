<script setup lang="ts">
  const container = ref<HTMLElement>()

  function resolveOnLoad(img: HTMLImageElement) {
    return new Promise<void>((resolve, _) => {
      img.addEventListener('load', () => resolve())
    })
  }

  onMounted(() => {
    const images = Array.from(container.value?.querySelectorAll('img') ?? ([] as HTMLImageElement[]))
    Promise
      .all(images.filter(img => !img.naturalWidth).map(resolveOnLoad))
      .then(() => images.forEach(img => {
        const aspect = img.naturalWidth / img.naturalHeight
        img.style.flexBasis = `${ aspect * 100 }%`
      }))
  })
</script>

<template>
  <div ref="container" class="image-row">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .image-row {
    display: flex;
    gap: var(--spacing);
    max-width: 100%;
    + .image-row {
      margin-top: var(--spacing);
    }
    :deep(img) {
      flex: 1;
      width: 100%;
      height: fit-content;
    }
  }
</style>