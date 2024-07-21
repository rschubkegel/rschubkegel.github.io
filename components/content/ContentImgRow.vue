<script setup lang="ts">
  defineProps<{
    collapse?: boolean;
  }>()

  const container = ref<HTMLElement>()

  function resolveOnLoad(img: HTMLImageElement) {
    return new Promise<void>((resolve, _) => {
      img.addEventListener('load', () => resolve())
    })
  }

  onMounted(() => {
    const children = Array.from(container.value?.children ?? [])
    const images = children.filter(el => el.matches('img')) as HTMLImageElement[]
    if (container.value) container.value.style.setProperty('--columns', children.map(_img => '1fr').join(' '))
    Promise
      .all(images.filter(img => !img.naturalWidth).map(resolveOnLoad))
      .then(() => {
        if (container.value) {
          const ratios = images.map(({ naturalWidth, naturalHeight }) =>  naturalWidth / naturalHeight)
          container.value.style.setProperty('--columns', ratios.map(r => `${r}fr`).join(' '))
        }
      })
  })
</script>

<template>
  <div ref="container" class="image-row" :class="{ collapse }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .image-row {
    // display: flex;
    --columns: 1fr;
    display: grid;
    grid-template-columns: var(--columns);
    gap: var(--spacing);
    max-width: var(--content-w);
    &.collapse {
      // WARNING: hard-coded (see :root vars)
      @media (max-width: 42rem) {
        --columns: 1fr !important;
      }
    }
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