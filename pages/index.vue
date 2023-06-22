<template>
  <main class='flex col gap2'>
    <div class='flex center'>
      <Logo id='logo' />
    </div>

    <section class='flex col'>
      <h1>Hello, I&apos;m Rylan</h1>
      <p>
        I&apos;m a web developer that is passionate about programming, art, and coffee.
        This site represents a small selection of my personal and professional work.
        Feel free to reach out via <a href="mailto:rylanschubkegel@gmail.com" target="_blank">email</a>
        or <a href="https://github.com/rschubkegel/" target="_blank">LinkedIn</a>, I would love to connect!
      </p>
      <hr>
      <div class="table-of-contents">
        <a
          v-for="header in headers.filter(h => h.level === 2)"
          :href="`#${ header.id }`"
          @click.prevent="scrollToId(header.id)">
          {{ toCapsCase(header.text) }}
        </a>
      </div>
      <hr>
    </section>

    <PreviewGroup v-for="group in groups" :to='group.href' :key="group.name">
      <template #name>{{ group.name }}</template>
      <nuxt-content v-for="(preview, i) in group.previews" :document='preview' :key="i" />
    </PreviewGroup>
  </main>
</template>

<script>
import createHeaderIds from '../assets/js/CreateHeaderIds'
import scrollToElement from '../assets/js/ScrollToElement'
import toCapsCase from '../assets/js/CapsCase'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  async asyncData ({ $content }) {
    return {
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
          href: '/art',
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
    this.headers = createHeaderIds([2,3])
  },
  methods: {
    scrollToId(id) {
      scrollToElement(document.getElementById(id))
    },
    toCapsCase
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

h1
  margin-bottom: .5em

hr
  border-bottom: none
  margin: 1.5rem 0
  &:first-child
    margin-top: 2.5rem
  &:last-child
    margin-bottom: 0

.table-of-contents
  display: flex
  justify-content: space-between
  a
    transition: 200ms
  &:hover a:not(:hover)
    opacity: .5
  @media (max-width: 576px)
    flex-direction: column
    gap: .5rem
    align-items: center
</style>