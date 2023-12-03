<template>
  <footer id='footer'>
    <div id='footer-copyright'>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
    <SocialIcons id="footer-socials" />
  </footer>
</template>

<style lang='sass' scoped>
  #footer
    --color: var(--color-bg-mild)
    --color-hover: var(--color-fg-mild)
    display: flex
    gap: var(--spacing)
    justify-content: center
    padding: var(--spacing)
    margin: var(--spacing) auto 0

    // WARNING: hard-coded (see :root vars)
    @media (max-width: 42rem)
      justify-content: space-between
      --color: var(--color-fg-mild)
      --color-hover: var(--color-fg-bold)

    #footer-copyright
      color: var(--color)
      font-weight: 300

    #footer-socials
      display: flex
      gap: calc(var(--spacing) / 2)
      :deep(svg)
        width: 1.5rem
        height: 1.5rem
        color: var(--color)
        &:hover
          color: var(--color-hover)
        path
          fill: currentColor
      // WARNING: hard-coded (see :root vars)
      @media (min-width: 42rem)
        display: none
</style>