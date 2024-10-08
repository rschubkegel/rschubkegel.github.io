// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo.svg'
        }
      ],
      title: 'rschubkegel: The Portfolio'
    }
  },
  build: {
    transpile: ['gsap']
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue']
    }
  ],
  devtools: {
    enabled: true
  },
  image: {
    domains: ['d1qgpo4v0a11d.cloudfront.net'],
  },
  modules: ['@nuxt/content', '@nuxt/image'],
  ssr: true
})