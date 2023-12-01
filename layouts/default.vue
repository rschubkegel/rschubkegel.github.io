<template>
  <main class="container">
    <slot></slot>
  </main>
</template>


<style scoped lang="scss">
  .container {
    max-width: var(--content-w);
    margin: auto;
  }
</style>