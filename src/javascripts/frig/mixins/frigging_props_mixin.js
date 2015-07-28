var React                         = require("react/addons")
var frigHelpers                   = require("../helpers.js")
var frigDefaults                  = require("../defaults.js")
var {humanize, clone, merge, map, mapObj, isConfigObj, setDefaults} = frigHelpers

module.exports = friggingPropsMixin = {

  componentWillReceiveProps: function (nextProps) {
    this._frigRefreshProps(nextProps)
  },

  componentWillMount: function() {
    this._frigRefreshProps(this.props)
  },

  frigDefaultLayers: function() {
    [
      # Global defaults
      frigDefaults,
      # Theme-level defaults
      this.props.themeDefaults || {},
      # Form-level defaults
      this.props.formDefaults || {},
    ]
  },

  # The default layers plus the layers related to this component's props and
  # friggingProps
  _frigPropLayers: function (props) {
    [
      ...this.frigDefaultLayers(),
      # Component-level defaults
      this.getFriggingProps?() || {},
      # User-entered options
      props,
    ]
  },

  _frigRefreshProps: function (props = {}) {
    # Setting defaults
    this.frigProps = {}
    setDefaults(...this._frigPropLayers(props), this.frigProps, this._frigPropVal)
  },

  # Return a normalized value for a frig property
  _frigPropVal: function (k, obj, layers) {
    var defaultVal = layers[0][k]
    # Class names are merged
    if (k == "className") return this._frigClassName(layers)
    # True properties should enable frigDefaults behavior
    # obj = defaultVal if this.frigProps[k] == true
    # evaluate value functions and replace them with their values
    fnNameRegex = /^on|^cb$|^validate$/
    if (typeof(obj) == "function" and (obj == defaultVal or !k.match(fnNameRegex))) {
      obj = obj.call(this, this)
    }
    return obj
  },

  # Return a classnames by concatination all of the classNames in the prop
  # layers.
  _frigClassName: function (sources) {
    var classNames = []
    for (source in sources) {
      className = source.className
      if (typeof(className) == "function") {
        className = className.call(this, this)
      }
      if (className) classNames.push(className)
    }
    # Return the concatinated className. Set it in this.frigProps to override
    # everything else.
    return classNames.join(" ")
  },

}