let isConfigObj, entries
let util = module.exports = {
  /*
   * Similar to the ECMA Script 7 proposed Object values function.
   * Returns an array of [key, value] arrays.
   * See http://stackoverflow.com/a/16643074/386193
   */
  entries: entries = function (object) {
    let values = []
    for (let k in object) values.push([k, object[k]])
    return values
  },

  isConfigObj: isConfigObj = function (obj) {
    var type = typeof obj
    return (
      type !== "string" &&
      type !== "number" &&
      type !== "boolean" &&
      type !== "function" &&
      type !== "undefined" &&
      obj  != null &&
      obj.length == null
    )
  },

  humanize: function (key) {
    if (key == null) return undefined
    var startOfWord = /([A-Z]|[0-9]+|_[a-z])/g
    var humanString = key.replace(startOfWord, " $1").replace(/_/g, "")
    return humanString[0].toUpperCase() + humanString.slice(1).toLowerCase()
  },

  clone: function (obj) {
    var objClone = {}
    for (let [k, v] of entries(obj)) objClone[k] = v
    return objClone
  },

  merge: function (target, ...others) {
    target = target || {}
    for (let other of others) {
      for (let [k, v] of entries(other || {})) target[k] = v
    }
    return target
  },

  promisedTimeout(duration) {
    return new Promise((resolve, reject) => setTimeout(resolve, duration))
  },

  map: function (array, fn) {
    var out = []
    for (let k of array) out.push(fn(k))
    return out
  },

  mapObj: function (obj, fn) {
    var out = {}
    for (let [k, v] of entries(obj)) out[k] = fn(k, v)
    return out
  },

  // Takes a list of defaults to inherit from, the object itself and an optional
  // callback parameter which can be used to adjust the value of each parameter.
  // This function operates deeply on nested objects.
  // The returned value has the following properties:
  // * The keys are the superset of all keys from all the layer.
  // * The keys are in the same order as the defaults with keys from other layers
  //   being appended after the defaults.
  setDefaults: function (...layers) {
    let cb = layers.pop()
    // No callback: Defaulting the callback to a passthrough function
    if (typeof cb != "function") {
      layers.push(cb)
      cb = (k, v) => v
    }
    // setting the target to the first layer
    var target = layers[layers.length - 1] || {}
    // cloning and reversing the layers for use in the iterator
    var reversedLayers = layers.slice(0).reverse()
    // The iterator is used to set a final value for each key in the returned
    // object
    var iterator = (k) => {
      // Setting the value for non-objects by "failing through" the defaults
      // until a non-null value is found
      let val
      for (let layer of reversedLayers) {
        if (val == null) val = layer[k]
      }
      return cb(k, val, layers)
    }
    // Recursively mapping the iterator over nested objects
    for (let [k, v] of entries(util.merge({}, ...layers))) {
      if (isConfigObj(layers[0][k])) {
        let namespacedLayers = util.map(layers, (layer) => layer[k] || {})
        v = util.setDefaults(...namespacedLayers, cb)
      }
      else {
        v = iterator(k)
      }
      target[k] = v
    }
    return target
  },

  capitalize: function (string) {
    if (string == null) return undefined
    return `${string[0].toUpperCase()}${string.slice(1)}`
  },

}
