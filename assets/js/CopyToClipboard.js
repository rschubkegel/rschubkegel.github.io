import notify from './Notify'

export default function copyToClipboard(string) {
  window.navigator.clipboard.writeText(string)
    .then(() => notify(`Copied to clipboard: ${ string }`))
    .catch(err => console.log(err))
}