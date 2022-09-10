<template>
  <footer class='flex between'>
    <div>© Rylan Schubkegel {{new Date().getFullYear()}}</div>
    <div class='flex gap1'>
      <a href='https://github.com/rschubkegel/'><fa :icon='faGithub' /></a>
      <a href='https://www.linkedin.com/in/rschubkegel/'><fa :icon='faLinkedin' /></a>
    </div>
  </footer>
</template>

<script>
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub() {
      return faGithub
    },
    faLinkedin() {
      return faLinkedin
    },
  }
}
</script>

<style lang='sass' scoped>
footer
  margin-top: 2rem
</style>