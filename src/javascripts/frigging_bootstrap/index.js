var React                         = require("react")
var {map} = require("frig/helpers")
var {span, i}                     = React.DOM
require("../../stylesheets/frigging_bootstrap/index.styl")

var friggingBootstrap
module.exports = friggingBootstrap = {

  component(name) {
    return require(`./components/${name}.js`)
  },

  /*
   * Optional: a theme-specific list of defaults that override the global
   * Frig.defaults
   */
  defaults: {
    layout:          "vertical",
    // Sizes
    xs:              12,
    sm:              undefined,
    md:              undefined,
    lg:              undefined,
    // Offsets
    xsOffset:        undefined,
    smOffset:        undefined,
    mdOffset:        undefined,
    lgOffset:        undefined,
  },

  errorList: function(errors) {
    if (errors) return map(errors, friggingBootstrap.error)
  },

  error: function(msg) {
    return span({className: "help-block"},
      i({className: "fa fa-exclamation-circle"}, ` ${msg}`),
    )
  },

  sizeClassNames: function(props) {
    var classes = {}
    var sizes = ["xs", "sm", "md", "lg"]
    // Adding column classes
    for (var k of sizes) {
      if (props[k] != null) classes[`col-${k}-${props[k]}`] = true
    }
    // Adding offset classes
    for (var size of sizes) {
      k = `${size}Offset`
      if (props[k] == null) continue
      classes[`col-${size}-offset-${props[k]}`] = true
    }
    return classes
  },

}
