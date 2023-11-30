import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    const selector = 'h1, h2, h3, p, div > a, img, svg, hr, iframe'
    const xAmt = 25
    const duration = .8
    const stagger = .1
    const ease = 'power2.out'
    const overwrite = true
    gsap.set(selector, {opacity: 0, x: -xAmt})
    ScrollTrigger.batch(selector, {
      onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, duration, stagger, ease, overwrite}),
      onLeave: batch => gsap.to(batch, {opacity: 0, x: xAmt, overwrite}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, x: 0, duration, stagger, ease, overwrite}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, x: -xAmt, overwrite}),
    })
  },
  unmounted() {
    ScrollTrigger.killAll()
  }
}