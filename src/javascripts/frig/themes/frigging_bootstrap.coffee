React                         = require "react/addons"
frigHelpers                   = require "../helpers.coffee"
{humanize, clone, merge, map} = frigHelpers
{span, i}                     = React.DOM
require "./frig/themes/frigging_bootstrap.styl"

module.exports = friggingBootstrap =
  # # Optional: a theme-specific list of defaults that override the global
  # # Frig.defaults
  defaults:
    layout:          "vertical"
    # Sizes
    xs:              "12"
    sm:              -> @frigProps.xs || "12"
    md:              -> @frigProps.sm || "12"
    lg:              -> @frigProps.md || "12"
    # Offsets
    xsOffset:        undefined
    smOffset:        -> @frigProps.xsOffset
    mdOffset:        -> @frigProps.smOffset
    lgOffset:        -> @frigProps.mdOffset

  errorList: (errors) ->
    map errors, friggingBootstrap.error if errors?

  error: (msg) ->
    span className: "help-block",
      i className: "fa fa-exclamation-circle", " #{msg}"

  sizeClassNames: (props) ->
    classes = {}
    sizes = ["xs", "sm", "md", "lg"]
    # Adding column classes
    for k in sizes
      classes["col-#{k}-#{props[k]}"] = true if props[k]?
    # Adding offset classes
    for size in sizes
      k = "#{size}Offset"
      continue unless props[k]?
      classes["col-#{size}-offset-#{props[k]}"] = true
    return classes
