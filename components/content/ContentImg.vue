<script setup lang="ts">
  import type { ResolvedImage } from '@nuxt/image'

  const props = defineProps<{ src: string; alt?: string; }>()
  const img = useImage()
  const format = computed(() => props.src.endsWith('.gif') ? 'gif' : 'webp')
  const data = await img.getMeta(props.src)
  const placeholder = img(props.src, {
    height: 10,
    format: format.value,
    blur: 1,
    quality: 10
  })
</script>

<template>
  <nuxt-img
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    :format="format"
    :placeholder="placeholder"
    :width="data.width"
    :height="data.height"
    loading="lazy"
  />
</template>