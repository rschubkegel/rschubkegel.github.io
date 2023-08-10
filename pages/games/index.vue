<template>
  <main class='flex col gap2'>
    <div class='page-header-container flex col center between gap1'>
      <nuxt-link id='home-link' to='/'>Return Home</nuxt-link>
      <h1>{{title}}</h1>
    </div>

    <nuxt-content
      v-for='(p, i) in projects'
      :key='i'
      :document='p'
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Games'
    }
  },
  async asyncData ({ $content }) {
    const projects = await $content('games/summaries')
      .sortBy('sortOrder', 'desc')
      .fetch()
    return {
      projects
    }
  },
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

#home-link
  font-weight: 300
  text-transform: lowercase

:deep(.nuxt-content)
  display: flex
  flex-direction: column
  gap: 1rem
</style>