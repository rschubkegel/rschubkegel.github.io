<template>
  <main class='flex col gap3'>
    <div class='flex center'>
      <Logo id='logo' />
    </div>

    <section class='flex col'>
      <nuxt-content :document='intro' />
    </section>

    <!-- <TheNavbar>
      <a
        v-for='header in headers'
        :key='header.id'
        :href='`#${header.id}`'
      >{{header.text}}</a>
    </TheNavbar> -->

    <PreviewGroup to='/web'>
      <template #name>Web Dev</template>
      <nuxt-content :document='portfolio' />
      <nuxt-content :document='voluntime' />
    </PreviewGroup>

    <PreviewGroup>
      <template #name>Engineering</template>
      <nuxt-content :document='hololens' />
      <nuxt-content :document='arGlasses' />
    </PreviewGroup>
    
    <PreviewGroup to='/games'>
      <template #name>Games</template>
      <nuxt-content :document='earthDefense' />
    </PreviewGroup>

    <PreviewGroup to='/art'>
      <template #name>Visual Art</template>
      <nuxt-content :document='painting' />
      <nuxt-content :document='typography' />
    </PreviewGroup>

    <PreviewGroup>
      <template #name>Music</template>
      <nuxt-content :document='newbkegels' />
      <nuxt-content :document='shoobie' />
    </PreviewGroup>
  </main>
</template>

<script>
import createHeaderIds from '../assets/js/CreateHeaderIds'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  async asyncData ({ $content }) {
    const intro = await $content('intro').fetch()
    const voluntime = await $content('web/voluntime').fetch()
    const portfolio = await $content('web/portfolio').fetch()
    const hololens = await $content('engr/mr-research').fetch()
    const arGlasses = await $content('engr/ar-glasses').fetch()
    const earthDefense = await $content('games/earth-defense').fetch()
    const painting = await $content('art/painting').fetch()
    const typography = await $content('art/typography').fetch()
    const shoobie = await $content('music/shoobie').fetch()
    const newbkegels = await $content('music/newbkegels').fetch()
    return {
      intro,
      voluntime,
      portfolio,
      hololens,
      arGlasses,
      earthDefense,
      painting,
      typography,
      shoobie,
      newbkegels,
    }
  },
  data() {
    return {
      headers: []
    }
  },
  mounted() {
    this.headers = createHeaderIds([2])
  },
  methods: {
    scrollTo(id) {
      window.scroll({ top: this.getTop(id) - 24, behavior: 'smooth' })
    },
    getTop(id) {
      let el = document.getElementById(id)
      let top = 0
      while (el) {
        top += el.offsetTop
        el = el.parentElement
      }
      return top
    }
  }
}
</script>

<style lang='sass' scoped>
#logo
  width: 8rem
  height: 8rem
  @include break-md
    width: 10rem
    height: 10rem
  @include break-lg
    width: 12rem
    height: 12rem

:deep(.nuxt-content)
  display: flex
  flex-direction: column
  gap: 1rem
</style>