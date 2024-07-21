<script setup lang="ts">
  const props = defineProps<{ src: string; alt?: string; }>()
  const img = useImage()
  // const { data } = useAsyncData(() => img.getMeta(props.src))
  const format = computed(() => props.src.endsWith('.gif') ? 'gif' : 'webp')
</script>

<template>
  <nuxt-img
    v-bind="$attrs"
    :src="src"
    :alt="alt"
    :format="format"
    :placeholder="img(src, { height: 10, format, blur: 1, quality: 10 })"
    loading="lazy"
  />
</template>