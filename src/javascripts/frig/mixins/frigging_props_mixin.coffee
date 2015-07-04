frigHelpers        = require "../helpers.coffee"
frigDefaults       = require "../defaults.coffee"
{humanize, clone, merge, map, mapObj, isConfigObj, setDefaults} = frigHelpers

module.exports = friggingPropsMixin =

  componentWillReceiveProps: (nextProps) ->
    @_frigRefreshProps(nextProps)

  componentWillMount: ->
    @_frigRefreshProps(@props)

  frigDefaultLayers: ->
    [
      # Global defaults
      frigDefaults
      # Theme-level defaults
      @props.themeDefaults || {}
      # Form-level defaults
      @props.formDefaults || {}
    ]

  # The default layers plus the layers related to this component's props and
  # friggingProps
  _frigPropLayers: (props) ->
    [
      @frigDefaultLayers()...
      # Component-level defaults
      @getFriggingProps?() || {}
      # User-entered options
      props
    ]

  _frigRefreshProps: (props = {}) ->
    # Setting defaults
    @frigProps = {}
    setDefaults @_frigPropLayers(props)..., @frigProps, @_frigPropVal

  # Return a normalized value for a frig property
  _frigPropVal: (k, obj, layers) ->
    defaultVal = layers[0][k]
    # Class names are merged
    return @_frigClassName layers if k == "className"
    # True properties should enable frigDefaults behavior
    # obj = defaultVal if @frigProps[k] == true
    # evaluate value functions and replace them with their values
    fnNameRegex = /^on|^cb$|^validate$/
    if typeof(obj) == "function" and (obj == defaultVal or !k.match fnNameRegex)
      obj = obj.call @, @
    return obj

  # Return a classnames by concatination all of the classNames in the prop
  # layers.
  _frigClassName: (sources) ->
    classNames = []
    for source in sources
      className = source.className
      className = className.call @, @ if typeof(className) == "function"
      classNames.push className if className
    # Return the concatinated className. Set it in @frigProps to override
    # everything else.
    classNames.join " "
