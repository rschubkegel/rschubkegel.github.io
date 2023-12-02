<script setup lang="ts">
  const container = ref<HTMLElement>()

  function resolveOnLoad(img: HTMLImageElement) {
    return new Promise<void>((resolve, _) => {
      img.addEventListener('load', () => resolve())
    })
  }

  onMounted(() => {
    const images = Array.from(container.value?.querySelectorAll('img') ?? ([] as HTMLImageElement[]))
    if (container.value) container.value.style.gridTemplateColumns = images.map(_img => '1fr').join(' ')
    Promise
      .all(images.filter(img => !img.naturalWidth).map(resolveOnLoad))
      .then(() => {
        // images.forEach(img => {
        //   const aspect = img.naturalWidth / img.naturalHeight
        //   img.style.flexBasis = `${ aspect * 100 }%`
        // })
        if (container.value) {
          const ratios = images.map(({ naturalWidth, naturalHeight }) =>  naturalWidth / naturalHeight)
          container.value.style.gridTemplateColumns = ratios.map(r => `${r}fr`).join(' ')
        }
      })
  })
</script>

<template>
  <div ref="container" class="image-row">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .image-row {
    // display: flex;
    display: grid;
    gap: var(--spacing);
    max-width: var(--content-w);
    + .image-row {
      margin-top: var(--spacing);
    }
    :deep(img) {
      flex-shrink: 1;
      width: 100%;
      height: auto;
      height: fit-content;
    }
  }
</style>