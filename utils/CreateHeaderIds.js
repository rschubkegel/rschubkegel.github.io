export default function createHeaderIds(levels=[1,2,3,4,5,6]) {
  const selector = levels.map(n => `h${n}`).join(', ')
  const headers = document.querySelectorAll(selector)
  headers.forEach(header => {
    const id = header.innerText.toLowerCase().replaceAll(' ', '-')
    header.id = id
  })
  return Array.from(headers).map(h => {
    return {
      text: h.innerText,
      id: h.id,
      level: parseInt(h.localName.slice(-1))
    }
  })
}