export default {
  components: true,
  target: 'static',
  ssr: false,
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