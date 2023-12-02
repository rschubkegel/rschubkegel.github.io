<template>
  <footer id='footer'>
    <div id='footer-copyright'>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
    <!-- <SocialIcons /> -->
  </footer>
</template>

<style lang='sass' scoped>
  #footer
    display: flex
    gap: var(--spacing)
    justify-content: center
    padding: var(--spacing)
    margin: var(--spacing) auto 0

    :deep(svg)
      display: flex
      gap: var(--spacing)
      align-items: center
      width: 1.5em
      height: 1.5em
      color: var(--color-bg-mild)
      &:hover
        color: var(--color-fg-mild)
      path
        fill: currentColor

    #footer-copyright
      color: var(--color-bg-mild)
      font-weight: 300
</style>