<template>
  <div class='flex col gap2'>
    <h2><slot name='name'></slot></h2>
    <slot></slot>
  </div>
</template>

<style lang='sass' scoped>
h2
  color: transparentize($fg-bold, .5)
  font-weight: 700
  text-transform: uppercase

  padding-bottom: 1rem
  border-bottom: solid 1px transparentize($fg-bold, .5)
</style>