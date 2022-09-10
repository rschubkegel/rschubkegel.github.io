<template>
  <div ref='container' class='flex col gap2' style='position: relative'>
    <div class='header-container'>
      <h2 ref='header'><slot name='name'></slot></h2>
    </div>
    <slot></slot>
  </div>
</template>

<style lang='sass' scoped>
.header-container
  font-size: 6rem
  position: absolute
  top: 0
  left: -1em

h2
  writing-mode: vertical-lr
  white-space: nowrap

  font-size: inherit
  font-weight: 700

  opacity: .25
  text-transform: uppercase
</style>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    ScrollTrigger.create({
      trigger: this.$refs.container,
      pin: this.$refs.header,
      start: 'top-=24 top',
      end: `bottom-=${this.$refs.header.clientHeight + 24} top`
    })
  }
}
</script>