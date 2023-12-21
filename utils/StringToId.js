/**
 * @param {String} string
 */
export function stringToId(string) {
  return string.toLowerCase().replaceAll(' ', '-').replaceAll('.', '');
}