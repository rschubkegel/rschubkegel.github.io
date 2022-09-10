export default {
  components: true,
  target: 'static',
  build: {
    transpile: [
      'gsap'
    ]
  },
  css: [
    './assets/styles/main.sass',
    './assets/styles/colors.sass',
    './assets/styles/fonts.sass',
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/fontawesome',
  ],
  styleResources: {
    sass: [
      './assets/styles/colors.sass'
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
          loading: 'lazy'
        }
      }
    }
  }
}