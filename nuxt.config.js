export default {
  components: true,
  target: 'static',
  ssr: false,
  head: {
    title: 'rschubkegel | a portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'rschubkegel.github.io',
        content: 'The eclectic portfolio of Rylan Schubkegel.'
      },
      { property: 'og:url', content: 'https://rschubkegel.github.io/' },
      { property: 'og:title', content: 'rschubkegel.github.io' },
      { property: 'og:description', content: 'The eclectic portfolio of Rylan Schubkegel.' },
      { property: 'og:image', content: '/social-preview.png' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }]
  },
  build: {
    transpile: [
      'gsap'
    ]
  },
  css: [
    './assets/styles/main.sass',
    './assets/styles/colors.sass',
    './assets/styles/breakpoints.sass',
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    '@nuxt/content',
  ],
  styleResources: {
    sass: [
      './assets/styles/colors.sass',
      './assets/styles/breakpoints.sass',
    ]
  },
  fontawesome: {
    component: 'fa'
  },
  image: {
    dir: 'assets/images',
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 90,
          fit: 'inside',
          width: 800,
          loading: 'lazy'
        }
      },
      sm: {
        modifiers: {
          format: 'webp',
          quality: 90,
          fit: 'inside',
          width: 200,
          loading: 'lazy'
        }
      },
      xs: {
        modifiers: {
          format: 'webp',
          quality: 90,
          fit: 'inside',
          width: 100,
          loading: 'lazy'
        }
      },
      gif: {
        modifiers: {
          loading: 'lazy'
        }
      }
    }
  },
}