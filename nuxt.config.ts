// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
      ],
      title: 'rschubkegel | a portfolio'
    }
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue']
    }
  ],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  ssr: false
})