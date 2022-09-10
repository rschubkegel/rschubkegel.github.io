export default function createHeaderIds(levels=[1,2,3,4,5,6]) {
  const selector = levels.map(n => `h${n}`).join(', ')
  document.querySelectorAll(selector).forEach(header => {
    const id = header.innerText.toLowerCase().replaceAll(' ', '-')
    header.id = id
  })
}