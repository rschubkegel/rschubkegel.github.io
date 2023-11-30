export default function scrollToElement(el) {
  const targetY = el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: targetY, behavior: 'smooth' })
}