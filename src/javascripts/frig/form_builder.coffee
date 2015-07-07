frigDefaults = require "./defaults.coffee"
module.exports = class FormBuilder
  constructor: (@parent, @opts = {}, @cb = ->) ->
    @props = {}
    for k in ["data", "ref", "typeMapping", "errors", "onChange"]
      @props[k] = @opts[k]
      delete @opts[k]
    # @props.validationState = {}
    @props[k] = v for k, v of @_defaults()

  _defaults: ->
    type:          "form"
    ref:           "form"
    cb:            @cb
    parent:        @parent
    theme:         @_theme()
    themeDefaults: @_theme().defaults
    formDefaults:  @opts

  # Create a theme-specific form React element
  render: ->
    @_theme().Form @props

  # returns the theme based on a cascading lookup
  _theme: ->
    themeName = @opts.theme ||= frigDefaults.theme
    throw "A theme name is required" unless themeName?
    theme = Frig[themeName]
    throw "Frig.#{themeName} does not exist" unless theme?
    return theme
