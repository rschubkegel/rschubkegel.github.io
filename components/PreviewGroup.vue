<template>
  <div class='flex col gap2'>
    <div class='group-header-container flex col center between gap1'>
      <h2>
        <slot name='name'></slot>
      </h2>
      <nuxt-link
        v-if='to'
        :to='to'
        class='page-link'
      >View Page</nuxt-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    to: null
  }
}
</script>

<style lang='sass' scoped>
.group-header-container
  color: transparentize($fg-bold, .5)
  padding-bottom: 1rem
  border-bottom: solid 1px currentcolor

  position: sticky
  top: 0

  background-color: $bg-bold
  padding: 1rem 0
  z-index: 5

  @include break-md
    flex-direction: row

h2
  font-weight: 700
  text-transform: uppercase

.page-link
  font-weight: 300
  text-transform: lowercase
</style>