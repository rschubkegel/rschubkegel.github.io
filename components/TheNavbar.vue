<template>
  <nav class='flex col gap1'>
    <span>Contents</span>
    <div ref='links' class='flex col'>
      <slot></slot>
    </div>
  </nav>
</template>

<style lang='sass' scoped>
nav
  width: max-content
  margin: auto

  span
    color: transparentize($fg-bold, .5)
    text-transform: uppercase
    font-weight: 300
    text-align: center
    letter-spacing: .2em
    // writing-mode: vertical-lr
    // border-left: 1px solid transparentize($fg-bold, .5)
    // transform: rotate(.5turn)

  div
    gap: .5rem

  a
    cursor: pointer
    &.nuxt-link-exact-active
      color: $fg-bold
</style>