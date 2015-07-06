React                        = require "react/addons"
frigHelpers                  = require "../helpers.coffee"
{humanize, map, capitalize, getTemplate, guessType, setDefaults} = frigHelpers

module.exports = dslMixin =

  frigDSL: ->
    errors: @_frigErrors
    input: @_frigInput
    submit: @_frigSubmit

  _frigErrors: ->
    @_frigInput "errors", type: "errors", errors: @props.errors

  # Create a submit button
  # value: [STRING] The label text for the submit button
  # props: [OBJECT] properties to send to the React Component (see input props)
  _frigSubmit: (value, props = {}) ->
    if arguments.length == 1 and typeof(value) != "string"
      props = value
      value = undefined
    setDefaults @_frigSubmitDefaults(value), props
    @_frigInput "submit", props

  _frigSubmitDefaults: (value) ->
    type: "submit"
    inputHtml:
      defaultValue: value if value?

  # Creates a form field
  # key: [STRING] the name of the field in the data
  # props:
  #   required: (default: true)
  #   inputHtml: specify html attributes for the input React DOM element
  #   labelHtml: specify html attributes for the label React DOM element
  #   placeholder:
  #     true: (default) adds a placeholder with a name based on a humanization
  #           of the key
  #     false: disables the placeholder
  #     [STRING]: sets the placeholder to the given string
  #  label:
  #     true: (default) adds a label with a name based on a humanization
  #           of the key
  #     false: disables the label
  #     [STRING]: sets the label to the given string
  _frigInput: (key, inputProps = {}) ->
    typeMapping = inputProps.typeMapping
    delete inputProps.typeMapping
    # Setting the defaults
    setDefaults @_frigInputDefaults(key), inputProps
    # Guessing the type and using it to lookup the template
    inputProps.type = @_frigGuessInputType inputProps
    # looking up the template name with the type mappings and the type
    templateName = @_frigGetTemplateName inputProps, @props.theme, typeMapping
    template = @_frigLoadTemplate inputProps, templateName
    # Creating and returning the template instance
    return template inputProps

  _frigInputDefaults: (key) ->
    ref:                    "#{key}Input"
    fieldKey:               key
    initialValue:           @initialValues()[key]
    onFriggingChildChange:  @_onFriggingChildChange
    onFriggingChildInit:    @_onFriggingChildInit
    formDefaults:           @props.formDefaults
    themeDefaults:          @props.theme.defaults || {}

  _frigGuessInputType: (inputProps) ->
    jsType = typeof inputProps.initialValue
    if inputProps.type?
      inputProps.type
    else if inputProps.multiple or Array.isArray inputProps.initialValue
      "multiselect"
    else if inputProps.options?
      "select"
    else if jsType == "boolean"
      "boolean"
    else if jsType == "number"
      "float"
    else if inputProps.fieldKey.match /[pP]assword^/
      "password"
    else
      "string"

  # Lookup the template name via a cascading lookup of the type through the
  # type mapping sources
  _frigGetTemplateName: ({type, key, template}, theme, inputTypeMapping) ->
    return capitalize template if template?
    sources = [{typeMapping: inputTypeMapping}, @, theme, Frig]
    for {typeMapping} in sources
      mapping = (typeMapping||{})[type]
      # mapping is either a template name string or an object of the form
      # {template: STRING, htmlInputType: STRING}
      return capitalize mapping.template || mapping if mapping?

  _frigLoadTemplate: (props, templateName) ->
    if !templateName?
      throw "#{props.key}: No type mapping found for type #{props.type}"
    if !@props.theme[templateName]?
      throw "#{props.key}: No #{templateName} template found in theme"
    return @props.theme[templateName]
