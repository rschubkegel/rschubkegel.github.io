<template>
  <header class='flex'>
    <div class='flex col'>
      <nuxt-link to='/'>Home</nuxt-link>
      <nuxt-link to='/hobbies'>Hobbies</nuxt-link>
    </div>
  </header>
</template>

<style lang='sass' scoped>
header
  position: sticky
  top: 2rem
  justify-content: end

  div
    position: absolute
    left: 100%
    width: max-content
    padding-left: 1rem

a.nuxt-link-exact-active
  color: $fg-bold
</style>