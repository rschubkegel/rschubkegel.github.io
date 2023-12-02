<template>
  <header>
    <a href="/" title="Home">
      <TheLogo class="logo" :taps-for-qr="0" />
    </a>
    <SocialIcons class="icons" />
  </header>
  <main class="container">
    <slot></slot>
    <TheFooter />
  </main>
</template>


<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: max-content;
    z-index: 100;
    background-color: var(--color-bg-strong);
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing);
    .logo {
      width: 2rem;
      height: 2rem;
    }
    .icons {
      left: var(--spacing);
      display: flex;
      flex-direction: column;
      :deep(svg) {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--color-bg-mild);
        &:hover {
          color: var(--color-fg-mild);
        }
        path {
          fill: currentColor;
        }
      }
    }
  }
  .container {
    // --sticky-header-top: calc((var(--spacing) * 2) + 2rem);
    max-width: var(--content-w);
    margin: auto;
  }
</style>