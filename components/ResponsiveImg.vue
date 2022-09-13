<template>
  <img
    :srcset='srcSet'
    :sizes='sizes'
    :alt='alt'
    loading='lazy'
  />
</template>

<script>
// NOTE: change this if optimize_images.mjs changes!
const RESOLUTIONS = [200, 800]

export default {
  props: {
    source: String,
    alt: String,
  },
  mounted() {
    // check which resolutions exist on the server
    let knownResCount = 1
    RESOLUTIONS.slice(1).forEach(size => {
      fetch(this.resSrc(size), { method: 'HEAD' })
        .then(res => {
          // image exists!
          if (res.ok) {
            this.resolutions.push(size)
            this.resolutions.sort((a,b)=>a-b)
          }

          // only update srcset if all resolutions known
          knownResCount++
          if (knownResCount === RESOLUTIONS.length) {
            this.srcSet = this.resolutions
              .map(res => `${this.resSrc(res)} ${res}w`)
              .join(', ')
            this.sizes = this.resolutions
              .map(res => `(max-width: ${res}px) ${res}px`)
              .join(', ')
          }
        })
    })
  },
  computed: {
    curSrc() {
      return this.resSrc(this.curRes)
    },
  },
  data() {
    return {
      curRes: RESOLUTIONS[0],
      srcSet: this.resSrc(RESOLUTIONS[0]),
      sizes: '',
      resolutions: RESOLUTIONS.slice(0, 1) // we KNOW each each will at least have this resolution
    }
  },
  methods: {
    resSrc(res) {
      return `${this.source.replace(/\.(jpe?g|png)$/i, `-${res}.webp`)}`
    }
  }
}
</script>