module.exports = helpers = {
  humanize: function (key) {
    if (key == undefined) return undefined
    var startOfWord = /([A-Z]|[0-9]+|_[a-z])/g
    var humanString = key.replace(startOfWord, " $1").replace(/_/g, "")
    return humanString[0].toUpperCase() + humanString[1..].toLowerCase()
  },

  clone: function (obj) {
    var objClone = {}
    for (k, v of obj) objClone[k] = v
    return objClone
  },

  merge: function (target, ...others) {
    var target ||= {}
    for (other in others) {
      for (k, v of other || {}) target[k] = v
    }
    return target
  },

  map: function (array, fn) {
    var out = []
    for (k in array) out.push(fn(k))
    return out
  },

  mapObj: function (obj, fn) {
    var out = {}
    for (k, v of obj) out[k] = fn(k, v)
    return out
  },

  // Takes a list of defaults to inherit from, the object itself and an optional
  // callback parameter which can be used to adjust the value of each parameter.
  // This function operates deeply on nested objects.
  // The returned value has the following properties:
  // * The keys are the superset of all keys from all the layer.
  // * The keys are in the same order as the defaults with keys from other layers
  //   being appended after the defaults.
  setDefaults: function (...layers, cb) {
    // No callback: Defaulting the callback to a passthrough function
    if (typeof(cb) != "function") {
      layers.push(cb)
      cb = function (k, v) {v}
    }
    // setting the target to the first layer
    var target = layers[layers.length - 1] || {}
    // cloning and reversing the layers for use in the iterator
    var reversedLayers = layers.slice(0).reverse()
    // The iterator is used to set a final value for each key in the returned
    // object
    var iterator = (k, v) => {
      // Setting the value for non-objects by "failing through" the defaults
      // until a non-null value is found
      val = undefined
      for (layer in reversedLayers) {
        if (val == undefined) val = layer[k]
      }
      return cb(k, val, layers)
    }
    // Recursively mapping the iterator over nested objects
    for (k, v of helpers.merge({}, ...layers)) {
      if (isConfigObj layers[0][k]){
        namespacedLayers = helpers.map(layers, (layer) => { layer[k] || {} })
        v = helpers.setDefaults namespacedLayers..., cb
      }
      else {
        v = iterator k, v
      }
      target[k] = v
    }
    return target
  },

  isConfigObj: function (obj) {
    var type = typeof(obj)
    return (
      type != "string" &&
      type != "number" &&
      type != "boolean" &&
      type != "function" &&
      type != "undefined" &&
      obj  != null &&
      obj.length == undefined
    )
  },

  capitalize: function (string) {
    if (string == undefined) return undefined
    return `${string[0].toUpperCase()}${string[1..]}`
  }

}

{humanize, clone, merge, map, mapObj, isConfigObj, setDefaults} = helpers
