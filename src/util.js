/*
 * Similar to the ECMA Script 7 proposed Object values function.
 * Returns an array of [key, value] arrays.
 * See http://stackoverflow.com/a/16643074/386193
 */
const entries = (object) => {
  const keys = Object.keys(object)
  return keys.map((key) => [key, object[key]])
}

const humanize = (key) => {
  if (key == null) return undefined
  const startOfWord = /([A-Z]|[0-9]+|_[a-z])/g
  const humanString = key.replace(startOfWord, ' $1').replace(/_/g, '')
  return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase()
}

module.exports = {
  entries,
  humanize,
}
