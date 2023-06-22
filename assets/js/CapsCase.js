export default function toCapsCase(string) {
  return string
    .split(' ')
    .map(s => s.toLowerCase())
    .map(s => s.substring(0, 1).toUpperCase() + s.substring(1))
    .join(' ')
}