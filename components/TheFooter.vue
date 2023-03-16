<template>
  <footer id='footer' class='flex col center gap1'>
    <div class='flex gap1 social'>
      <a href='https://github.com/rschubkegel/' target="_blank">
        <fa :icon='faGithub' style='height: 1.5em' />
      </a>
      <a href='https://www.linkedin.com/in/rschubkegel/' target="_blank">
        <fa :icon='faLinkedin' style='height: 1.5em' />
      </a>
      <a href='https://www.instagram.com/theryguydraws/' target="_blank">
        <fa :icon='faInstagram' style='height: 1.5em' />
      </a>
      <a href='https://supergobo.itch.io/' target="_blank">
        <fa :icon='faItchIo' style='height: 1.5em' />
      </a>
    </div>
    <div id='footer-copyright'>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
  </footer>
</template>

<script>
import { faGithub, faLinkedin, faInstagram, faItchIo } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub() { return faGithub },
    faLinkedin() { return faLinkedin },
    faInstagram() { return faInstagram },
    faItchIo() { return faItchIo },
  }
}
</script>

<style lang='sass' scoped>
#footer
  margin-top: 2rem
  @include break-md
    flex-direction: row-reverse
    justify-content: space-between

  svg
    color: var(--color-fg-mild)
    &:hover
      color: var(--color-fg-bold)

#footer-copyright
  color: var(--color-fg-mild)
  font-weight: 300
</style>