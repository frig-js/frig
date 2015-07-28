var React                         = require("react/addons")
var frigHelpers                   = require("../helpers.js")
var {humanize, clone, merge, map} = frigHelpers
var {span, i}                     = React.DOM
require("../../../stylesheets/frig/themes/frigging_bootstrap.styl")

module.exports = friggingBootstrap = {
  # # Optional: a theme-specific list of defaults that override the global
  # # Frig.defaults
  defaults: {
    layout:          "vertical",
    # Sizes
    xs:              "12",
    sm:              function() {return @frigProps.xs || "12"},
    md:              function() {return @frigProps.sm || "12"},
    lg:              function() {return @frigProps.md || "12"},
    # Offsets
    xsOffset:        undefined,
    smOffset:        function() {return @frigProps.xsOffset},
    mdOffset:        function() {return @frigProps.smOffset},
    lgOffset:        function() {return @frigProps.mdOffset},
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
    # Adding column classes
    for (k in sizes) {
      if (props[k] != undefined) classes[`col-${k}-${props[k]}`] = true
    }
    # Adding offset classes
    for (size in sizes) {
      k = `${size}Offset`
      if (props[k] == undefined) continue
      classes[`col-${size}-offset-${props[k]}`] = true
    }
    return classes
  },

}