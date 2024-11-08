<script setup lang="ts">
  const props = defineProps<{ src: string; alt?: string; }>()
  const img = useImage()
  const format = computed(() => props.src.endsWith('.gif') ? 'gif' : 'webp')
  const data = await img.getMeta(props.src)
</script>

<template>
  <nuxt-img
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    :format="format"
    :placeholder="img(src, { height: 10, format, blur: 1, quality: 10 })"
    :width="data.width"
    :height="data.height"
    loading="lazy"
  />
</template>