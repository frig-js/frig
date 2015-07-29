var React                        = require("react/addons")
var globalTypeMapping            = require("../type_mapping.js")
var frigHelpers                  = require("../helpers.js")
var {capitalize, setDefaults} = frigHelpers

module.exports = {

  frigDSL: function() {
    return {
      errors: this._frigErrors,
      input: this._frigInput,
      submit: this._frigSubmit,
    }
  },

  _frigErrors: function() {
    return this._frigInput("errors", {
      type: "errors",
      errors: this.props.errors,
    })
  },

  // Create a submit button
  // value: [STRING] The label text for the submit button
  // props: [OBJECT] properties to send to the React Component (see input props)
  _frigSubmit: function(value, props = {}) {
    if (arguments.length === 1 && typeof value != "string")
    {
      props = value
      value = undefined
    }
    setDefaults(this._frigSubmitDefaults(value), props)
    return this._frigInput("submit", props)
  },

  _frigSubmitDefaults: function(value) {
    return {
      type: "submit",
      inputHtml: {
        defaultValue: value,
      },
    }
  },

  // Creates a form field
  // key: [STRING] the name of the field in the data
  // props:
  //   required: (default: true)
  //   inputHtml: specify html attributes for the input React DOM element
  //   labelHtml: specify html attributes for the label React DOM element
  //   placeholder:
  //     true: (default) adds a placeholder with a name based on a humanization
  //           of the key
  //     false: disables the placeholder
  //     [STRING]: sets the placeholder to the given string
  //  label:
  //     true: (default) adds a label with a name based on a humanization
  //           of the key
  //     false: disables the label
  //     [STRING]: sets the label to the given string
  _frigInput: function(key, inputProps = {}) {
    var isCoffeescript = key != null
    var typeMapping = inputProps.typeMapping
    delete inputProps.typeMapping
    // Setting the defaults
    setDefaults(this._frigInputDefaults(key), inputProps)
    // Guessing the type and using it to lookup the template
    inputProps.type = this._frigGuessInputType(inputProps)
    // looking up the template name with the type mappings and the type
    let templateName = this._frigGetTemplateName(
      inputProps,
      this.props.theme,
      typeMapping,
    )
    let template = this._frigLoadTemplate(inputProps, templateName)
    if (isCoffeescript) template = React.createFactory(template)
    // Creating and returning the template instance
    return template(inputProps)
  },

  _frigInputDefaults: function(key) {
    return {
      ref:                    `${key}Input`,
      fieldKey:               key,
      initialValue:           this.initialValues()[key],
      onFriggingChildChange:  this._onFriggingChildChange,
      onFriggingChildInit:    this._onFriggingChildInit,
      formDefaults:           this.props.formDefaults,
      themeDefaults:          this.props.theme.defaults || {},
    }
  },

  _frigGuessInputType: function(inputProps) {
    let jsType = typeof inputProps.initialValue
    if (inputProps.type != null) {
      return inputProps.type
    }
    else if (inputProps.multiple || Array.isArray(inputProps.initialValue)) {
      return "multiselect"
    }
    else if (inputProps.options != null) {
      return "select"
    }
    else if (jsType === "boolean") {
      return "boolean"
    }
    else if (jsType === "number") {
      return "float"
    }
    else if (inputProps.fieldKey.match(/[pP]assword^/)) {
      return "password"
    }
    else {
      return "string"
    }
  },

  // Lookup the template name via a cascading lookup of the type through the
  // type mapping sources
  _frigGetTemplateName: function({type, key, template}, theme, inputTypeMapping) {
    if (template != null) return capitalize(template)
    var sources = [
      inputTypeMapping,
      this.typeMapping,
      theme.typeMapping,
      globalTypeMapping,
    ]
    for (var typeMapping of sources) {
      var mapping = (typeMapping || {})[type]
      // mapping is either a template name string or an object of the form
      // {template: STRING, htmlInputType: STRING}
      if (mapping != null) return capitalize(mapping.template || mapping)
    }
  },

  _frigLoadTemplate: function(props, templateName) {
    if (templateName == null) {
      throw `${props.key}: No type mapping found for type ${props.type}`
    }
    if (this.props.theme[templateName] == null) {
      throw `${props.key}: No ${templateName} template found in theme`
    }
    return this.props.theme[templateName]
  },

}
