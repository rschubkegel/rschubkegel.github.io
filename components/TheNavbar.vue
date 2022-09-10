<template>
  <nav class='flex'>
    <div ref='links' class='flex col'>
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    gsap.to(this.$refs.links, {
      left: '100%',
      paddingLeft: '1rem',
      scrollTrigger: {
        trigger: 'nav',
        start: 'top-=24 top',
        toggleActions: 'play none none reverse'
      },
      duration: .5,
      ease: 'power4.out'
    })
  }
}
</script>

<style lang='sass' scoped>
nav
  position: sticky
  top: 2rem

  div
    position: relative
    width: max-content
    left: 0
    padding-left: 0

a.nuxt-link-exact-active
  color: $fg-bold
</style>