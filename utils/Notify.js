export default function notify(message) {
  const el = document.createElement('div')
  el.innerText = message
  el.style.position = 'fixed'
  el.style.bottom = 0
  el.style.left = 0
  el.style.zIndex = 1000
  el.style.fontSize = '10pt'
  el.style.margin = '.5em'
  el.style.padding = '.5em'
  el.style.background = 'var(--color-bg-bold, transparent)'
  el.style.borderRadius = '.5em'
  el.style.boxShadow = '.1em .2em 1em #0002'
  document.querySelector('main')?.appendChild(el)

  const duration = 1.2 * 1000
  const delay = 1.2 * 1000
  el.animate([{ opacity: 0 }], { duration, delay })
  window.setTimeout(() => document.querySelector('main')?.removeChild(el), duration + delay)
}