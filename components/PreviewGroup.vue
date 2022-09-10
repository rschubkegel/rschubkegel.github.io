<template>
  <div>
    <h2><slot name='name'></slot></h2>
    <slot></slot>
  </div>
</template>

<style lang='sass' scoped>
h2
  opacity: .25
  font-size: 6rem
  margin-bottom: -.75em
  text-transform: uppercase
</style>