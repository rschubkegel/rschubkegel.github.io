<template>
  <footer id='footer' class='flex row between gap1'>
    <div id='footer-copyright'>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
    <div class='flex gap1 social'>
      <a href='https://github.com/rschubkegel/' target="_blank">
        <IconGitHub />
      </a>
      <a href='https://www.linkedin.com/in/rschubkegel/' target="_blank">
        <IconLinkedIn />
      </a>
      <a href='https://www.instagram.com/theryguydraws/' target="_blank">
        <IconInstagram />
      </a>
      <a href='https://supergobo.itch.io/' target="_blank">
        <IconItch />
      </a>
    </div>
  </footer>
</template>

<style lang='sass' scoped>
  #footer
    padding: 1rem
    margin: 1rem auto 0
    max-width: var(--content-w)

    svg
      width: 1.5em
      height: 1.5em
      color: var(--color-fg-mild)
      &:hover
        color: var(--color-fg-bold)
      :deep(path)
        fill: currentColor

    #footer-copyright
      color: var(--color-fg-mild)
      font-weight: 300
</style>