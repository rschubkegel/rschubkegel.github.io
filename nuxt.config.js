export default {
  components: true,
  target: 'static',
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
  }
}