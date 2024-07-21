<script setup lang="ts">
  defineProps<{ collapse?: boolean }>()

  const container = ref<HTMLElement>()

  const children = computed(() => Array.from(container.value?.children ?? []))

  const columns = computed(
    () =>
      children.value.map(img => {
        if (img.matches('img')) {
          const width = (img as HTMLImageElement).width
          const height = (img as HTMLImageElement).height
          if (height === 0) return '1fr'
          const ratio = width / height
          return `${ ratio }fr`
        } else return '1fr'
      }).join(' ')
  )
</script>

<template>
  <div ref="container" class="image-row" :class="{ collapse }" :style="{ '--columns': columns }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .image-row {
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