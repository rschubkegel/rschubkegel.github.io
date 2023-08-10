<template>
  <main class='flex col gap2'>
    <div class='page-header-container flex col center between gap1'>
      <nuxt-link id='games-link' to='/games'>Return to Games</nuxt-link>
      <h1>{{ title }}</h1>
    </div>
    <nuxt-content :document="nuxtContent" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Out of Thyme'
    }
  },
  async asyncData({ $content }) {
    const nuxtContent = await $content('games/pages/out-of-thyme').fetch()
    return { nuxtContent }
  }
}
</script>

<style lang='sass' scoped>
.page-header-container
  color: var(--color-fg-mild)

  padding-bottom: 1rem
  border-bottom: solid 1px currentcolor

  @include break-md
    flex-direction: row

h1
  text-transform: uppercase

#games-link
  font-weight: 300
  text-transform: lowercase

:deep(.nuxt-content)
  display: flex
  flex-direction: column
  gap: 1rem

:deep(ul) li
  list-style-position: inside
  a
    text-decoration: underline
</style>