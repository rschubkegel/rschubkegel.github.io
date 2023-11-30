<template>
  <div class='flex col gap2'>
    <div class='group-header-container flex col center between gap1'>
      <h2 @click="onHeaderClicked">
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
import copyToClipboard from '../assets/js/CopyToClipboard'
import scrollToElement from '../assets/js/ScrollToElement'

export default {
  props: {
    to: null
  },
  methods: {
    onHeaderClicked(e) {
      scrollToElement(e.target.parentElement.parentElement)
      copyToClipboard(`${ window.location.href }#${ e.target.id }`)
    }
  }
}
</script>

<style lang='sass' scoped>
.group-header-container
  color: var(--color-fg-mild)
  padding-bottom: 1rem
  border-bottom: solid 1px currentcolor

  position: sticky
  top: 0

  background-color: var(--color-bg-bold)
  padding: 1rem 0
  z-index: 5

h2
  font-weight: 700
  text-transform: uppercase
  transition: 800ms
  &:hover
    cursor: pointer
    // text-shadow: 2px -1px #f00d, -2px 1px #00fd // chromatic abberation
    text-shadow: -4px 4px var(--color-splash-mild)
    translate: 2px -2px
    transition: 200ms

.page-link
  font-weight: 300
  text-transform: lowercase
</style>