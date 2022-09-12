<template>
  <div ref='container' class='img-row-container'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // add correct number of columns
    const imageCount = this.$refs.container.children.length
    this.$refs.container.style.gridTemplateColumns = `repeat(${imageCount}, 1fr`

    // once all images are loaded, calculate correct size of grid columns
    let imagesLoaded = 0
    Array.from(this.$refs.container.children).forEach(i => {
      i.onload = () => {
        imagesLoaded++
        if (imagesLoaded === imageCount) this.setGridColumns()
      }
    })
  },
  methods: {
    setGridColumns() {
      // pick a consistent height to calculate by
      const h = 200
      // get all children (should all be <nuxt-img>)
      const images = Array.from(this.$refs.container.children)
      // calculate image ratios
      const ratios = images.map(img => h / img.naturalHeight)
      // calculate width if all images were the height set above
      const adjWidths = images.map((img, i) => img.naturalWidth * ratios[i])
      // add pixel width of each image
      const totalWidth = adjWidths.reduce((a, b) => a + b, 0)
      // calculate factor by which to multiply % width
      const factor = totalWidth / adjWidths[0]
      // set grid columns
      this.$refs.container.style.gridTemplateColumns = '1fr ' + adjWidths
        .slice(1) // skip the first image--this is always 1fr
        .map(w => `${(w / totalWidth) * factor}fr`)
        .join(' ')
    }
  }
}
</script>

<style lang='sass' scoped>
.img-row-container
  display: grid
  place-items: center
  gap: 1rem
  :deep(img)
    width: 100%
</style>