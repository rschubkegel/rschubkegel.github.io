/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} string
 * @returns a string with the first letter capitalized
 */
export function capitalizeString(string) {
  return string.at(0).toUpperCase().concat(string.slice(1));
}