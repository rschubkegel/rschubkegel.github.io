<template>
  <footer id='footer' class='flex col center gap1'>
    <div id='footer-copyright' class='show-md'>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
    <div class='flex gap1'>
      <a href='https://github.com/rschubkegel/'><fa :icon='faGithub' /></a>
      <a href='https://www.linkedin.com/in/rschubkegel/'><fa :icon='faLinkedin' /></a>
      <a href='https://www.instagram.com/theryguydraws/'><fa :icon='faInstagram' /></a>
      <a href='https://supergobo.itch.io/'><fa :icon='faItchIo' /></a>
    </div>
    <div id='footer-copyright' class='hide-md'>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
  </footer>
</template>

<script>
import { faGithub, faLinkedin, faInstagram, faItchIo } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub() {
      return faGithub
    },
    faLinkedin() {
      return faLinkedin
    },
    faInstagram() {
      return faInstagram
    },
    faItchIo() {
      return faItchIo
    },
  }
}
</script>

<style lang='sass' scoped>
#footer
  margin-top: 2rem
  @include break-md
    flex-direction: row
    justify-content: space-between

#footer-copyright
  color: transparentize($fg-mild, .5)
</style>