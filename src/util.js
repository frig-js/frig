const isConfigObj = (obj) => {
  const type = typeof obj
  return (
    type !== 'string' &&
    type !== 'number' &&
    type !== 'boolean' &&
    type !== 'function' &&
    type !== 'undefined' &&
    obj != null &&
    obj.length == null
  )
}

/*
 * Similar to the ECMA Script 7 proposed Object values function.
 * Returns an array of [key, value] arrays.
 * See http://stackoverflow.com/a/16643074/386193
 */
const entries = (object) => {
  const keys = Object.keys(object)
  return keys.map((key) => [key, object[key]])
  // const values = []
  // for (let k in object) values.push([k, object[k]])
  // return values
}

const merge = (target_, ...others) => {
  const target = target_ || {}
  for (const other of others) {
    for (const [k, v] of entries(other || {})) target[k] = v
  }
  return target
}

const clone = (obj) => {
  const objClone = {}
  for (const [k, v] of entries(obj)) objClone[k] = v
  return objClone
}

const humanize = (key) => {
  if (key == null) return undefined
  const startOfWord = /([A-Z]|[0-9]+|_[a-z])/g
  const humanString = key.replace(startOfWord, ' $1').replace(/_/g, '')
  return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase()
}

const promisedTimeout = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration))

const map = (array, fn) => {
  const out = []
  for (const k of array) out.push(fn(k))
  return out
}

const mapObj = (obj, fn) => {
  const out = {}
  for (const [k, v] of entries(obj)) out[k] = fn(k, v)
  return out
}

// Takes a list of defaults to inherit from, the object itself and an optional
// callback parameter which can be used to adjust the value of each parameter.
// This function operates deeply on nested objects.
// The returned value has the following properties:
// * The keys are the superset of all keys from all the layer.
// * The keys are in the same order as the defaults with keys from other layers
//   being appended after the defaults.
const setDefaults = (...layers) => {
  let cb = layers.pop()
  // No callback: Defaulting the callback to a passthrough function
  if (typeof cb !== 'function') {
    layers.push(cb)
    cb = (k, v) => v
  }
  // setting the target to the first layer
  const target = layers[layers.length - 1] || {}
  // cloning and reversing the layers for use in the iterator
  const reversedLayers = layers.slice(0).reverse()
  // The iterator is used to set a final value for each key in the returned
  // object
  const iterator = (k) => {
    // Setting the value for non-objects by "failing through" the defaults
    // until a non-null value is found
    let val
    for (const layer of reversedLayers) {
      if (val == null) val = layer[k]
    }
    return cb(k, val, layers)
  }
  // Recursively mapping the iterator over nested objects

  for (let [k, v] of entries(merge({}, ...layers))) {  // eslint-disable-line prefer-const
    if (isConfigObj(layers[0][k])) {
      const namespacedLayers = map(layers, (layer) => layer[k] || {})
      v = setDefaults(...namespacedLayers, cb)
    } else {
      v = iterator(k)
    }
    target[k] = v
  }
  return target
}

const capitalize = (string) => {
  if (string == null) return undefined
  return `${string[0].toUpperCase()}${string.slice(1)}`
}

module.exports = {
  entries,
  isConfigObj,
  humanize,
  clone,
  merge,
  map,
  mapObj,
  setDefaults,
  capitalize,
  promisedTimeout,
}
