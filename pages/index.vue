<template>
  <main class='flex col gap2'>
    <div class='flex center'>
      <Logo id='logo' />
    </div>

    <section class='flex col'>
      <nuxt-content :document='intro' />
    </section>

    <PreviewGroup v-for="group in groups" :to='group.href' :key="group.name">
      <template #name>{{ group.name }}</template>
      <nuxt-content v-for="(preview, i) in group.previews" :document='preview' :key="i" />
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
    return {
      intro: await $content('intro').fetch(),
      groups: [
        {
          name: 'Web Dev',
          href: '/web',
          previews: [
            await $content('web/phoenix').fetch(),
            await $content('web/novella').fetch()
          ]
        },
        {
          name: 'Engineering',
          previews: [
            await $content('engr/mr-research').fetch(),
            await $content('engr/ar-glasses').fetch()
          ]
        },
        {
          name: 'Games',
          href: '/games',
          previews: [
            await $content('games/creature-games').fetch(),
            await $content('games/earth-defense').fetch()
          ]
        },
        {
          name: 'Visual Art',
          href: '/games',
          previews: [
            await $content('art/painting').fetch(),
            await $content('art/typography').fetch()
          ]
        },
        {
          name: 'Music',
          previews: [
            await $content('music/shoobie').fetch(),
            await $content('music/newbkegels').fetch()
          ]
        }
      ]
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