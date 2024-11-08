<script setup lang="ts">
  const props = defineProps<{ src: string; alt?: string; }>()
  const img = useImage()
  const format = computed(() => props.src.endsWith('.gif') ? 'gif' : 'webp')
  const placeholder = /https?:\/\//.test(props.src) ? undefined : img(props.src, {
    height: 100,
    format: 'webp',
    blur: 1,
    quality: 10
  })
</script>

<template>
  <nuxt-img
    v-if="placeholder"
    v-bind="$attrs"
    :src="props.src"
    :alt="alt"
    :format="format"
    :placeholder="placeholder"
    loading="lazy"
  />
  <img
    v-else
    v-bind="$attrs"
    :src="props.src"
    alt=""
  >
</template>