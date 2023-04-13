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
    color: var(--color-fg-mild)
    text-transform: uppercase
    font-weight: 300
    text-align: center
    letter-spacing: .2em

  div
    gap: .5rem

  a
    cursor: pointer
    &.nuxt-link-exact-active
      color: var(--color-fg-bold)
</style>