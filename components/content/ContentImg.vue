<template>
  <nuxt-img
    width="1000"
    format="webp"
    loading="lazy"
    :placeholder="$attrs.width && $attrs.height ? [$attrs.width, $attrs.height] : undefined"
    v-bind="$attrs"
  />
</template>