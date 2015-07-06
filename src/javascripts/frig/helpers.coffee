module.exports = helpers =
  humanize: (key) ->
    return undefined unless key?
    humanString = key.replace(/([A-Z]|[0-9]+|_[a-z])/g, " $1").replace /_/g, ""
    return humanString[0].toUpperCase() + humanString[1..].toLowerCase()

  clone: (obj) ->
    objClone = {}
    objClone[k] = v for k, v of obj
    return objClone

  merge: (target, others...) ->
    target ||= {}
    for other in others
      target[k] = v for k, v of (other || {})
    return target

  map: (array, fn) ->
    out = []
    out.push fn k for k in array
    return out

  mapObj: (obj, fn) ->
    out = {}
    out[k] = fn k, v for k, v of obj
    return out

  # Takes a list of defaults to inherit from, the object itself and an optional
  # callback parameter which can be used to adjust the value of each parameter.
  # This function operates deeply on nested objects.
  # The returned value has the following properties:
  # * The keys are the superset of all keys from all the layer.
  # * The keys are in the same order as the defaults with keys from other layers
  #   being appended after the defaults.
  setDefaults: (layers..., cb) ->
    # No callback: Defaulting the callback to a passthrough function
    if typeof(cb) != "function"
      layers.push cb
      cb = (k, v) -> v
    # setting the target to the first layer
    target = layers[layers.length - 1] || {}
    # cloning and reversing the layers for use in the iterator
    reversedLayers = layers.slice(0).reverse()
    # The iterator is used to set a final value for each key in the returned
    # object
    iterator = (k, v) ->
      # Setting the value for non-objects by "failing through" the defaults
      # until a non-null value is found
      val = undefined
      val ?= layer[k] for layer in reversedLayers
      cb k, val, layers
    # Recursively mapping the iterator over nested objects
    for k, v of helpers.merge {}, layers...
      if isConfigObj layers[0][k]
        namespacedLayers = helpers.map layers, (layer) -> layer[k] || {}
        v = helpers.setDefaults namespacedLayers..., cb
      else
        v = iterator k, v
      target[k] = v
    return target

  isConfigObj: (obj) ->
    type = typeof obj
    return (
      type != "string" and
      type != "number" and
      type != "boolean" and
      type != "function" and
      type != "undefined" and
      obj  != null and
      obj.length == undefined
    )

  capitalize: (string) ->
    return undefined unless string?
    "#{string[0].toUpperCase()}#{string[1..]}"


{humanize, clone, merge, map, mapObj, isConfigObj, setDefaults} = helpers
