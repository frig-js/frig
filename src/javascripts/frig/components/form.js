let React                        = require("react/addons")
let frigInput                    = React.createFactory(require("./input.js"))
let {entries}                    = require("../util.js")

/*
 * A JSX-compatible React DOM Component.
 * FrigForm should be used as the top level component for Frig forms in JSX.
 * In coffeescript FrigForm is called by FrigDSL.
 */
export default class FrigForm extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    form: React.PropTypes.func.isRequired,
    theme: React.PropTypes.object.isRequired,
    typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
    // Callbacks
    onChange: React.PropTypes.func,
    onValidChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
  }

  static defaultProps = {
    theme: undefined,
    typeMapping: {},
    onChange() {},
    onValidChange() {},
    onSubmit() {},
  }

  _frigChanges = {}
  _frigFormData = {}
  _frigValidFormData = {}

  /*
   * =========================================================================
   * Public Functions
   * =========================================================================
   */

  validate() {
    let valid = true
    for (let [key, input] of entries(this.refs)) {
      if (key.match(/Input$/) != null && input.validate != null) {
        valid &= input.validate()
      }
    }
    return valid
  }

  getData() {
    return this._frigFormData
  }

  getValidData() {
    return this._frigValidFormData
  }

  /*
   * =========================================================================
   * React Lifecycle + Render
   * =========================================================================
   */

  componentWillMount() {
    // Create a factory for the theme the first time the component mounts
    this._themedForm = React.createFactory(this.props.theme.component("form"))
  }

  render() {
    return this._themedForm(this._themedFormProps(), this._friggingChildren())
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _themedFormProps() {
    let formProps = Object.assign({}, this.props)
    formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
      ref: "form",
      onSubmit: this._onSubmit.bind(this),
    })
    return formProps
  }

  // Generate the type mapping for an input component
  _typeMapping(inputTypeMapping) {
    return Object.assign(
      {},
      require("../type_mapping.js"),
      this.props.theme.type_mapping,
      inputTypeMapping,
    )
  }

  _initialValues() {
    // If the data is a ReactLink extract its value
    if (this.props.data.requestChange != null) {
      return this.props.data.value
    }
    else {
      return this.props.data
    }
  }

  // Generates React DOM elements to pass to the themed form component as
  // child components.
  _friggingChildren() {
    return this.props.form(this._frigDSL())
  }

  _onFriggingChildInit(k, v) {
    this._frigFormData[k] = v
    this._frigValidFormData[k] = v
  }

  _onFriggingChildChange(k, v, valid) {
    this._frigFormData[k] = v
    if (valid) {
      this._frigValidFormData[k] = v
    }
    else {
      delete this._frigValidFormData[k]
    }
    // clone the form data object to avoid the situation where subsequent form
    // updates unexpectedly mutate the data object
    let formData = Object.assign({}, this._frigFormData)
    let reactLinkData = Object.assign({}, this._initialValues(), formData)
    // Notify the event listeners
    this.props.onChange(formData)
    if (valid) this.props.onValidChange(formData)
    // Update the ReactLink with the merged combination of form data and the
    // initial values passed in to the form (allowing non-form data to be
    // persisted)
    if (this.props.data.requestChange != null) {
      this.props.data.requestChange(reactLinkData)
    }
  }

  _onSubmit(e) {
    e.preventDefault()
    if (!this.validate()) return
    this.props.onSubmit(e, this._frigFormData)
  }

  /*
   * =========================================================================
   * DSL
   * =========================================================================
   */


  _frigDSL() {
    return {
      errors: this._frigErrors.bind(this),
      input: this._frigInput.bind(this),
      submit: this._frigSubmit.bind(this),
    }
  }

  _frigErrors() {
    return this._frigInput("errors", {
      type: "errors",
      errors: this.props.errors,
    })
  }

  // Create a submit button
  // value: [STRING] The label text for the submit button
  // props: [OBJECT] properties to send to the React Component (see input props)
  _frigSubmit(value, props = {}) {
    if (arguments.length === 1 && typeof value != "string")
    {
      props = value
      value = undefined
    }
    props = Object.assign(this._frigSubmitDefaults(value), props)
    return this._frigInput("submit", props)
  }

  _frigSubmitDefaults(value) {
    return {
      type: "submit",
      inputHtml: {
        defaultValue: value,
      },
    }
  }

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
  _frigInput(key, inputProps = {}) {
    var isCoffeescript = key != null
    var typeMapping = inputProps.typeMapping
    delete inputProps.typeMapping
    // Setting the defaults
    inputProps = Object.assign(this._frigInputDefaults(key), inputProps)
    // Guessing the type and using it to lookup the template
    inputProps.type = this._frigGuessInputType(inputProps)
    // looking up the template name with the type mappings and the type
    let mapping = this._typeMapping(typeMapping)[inputProps.type]
    let component = this._getThemedInputComponent(inputProps, mapping.component)
    if (isCoffeescript) component = React.createFactory(component)
    inputProps.component = component
    inputProps.inputHtml = Object.assign(
      {type: mapping.htmlInputType},
      inputProps.inputHtml,
    )
    // Creating and returning the component instance
    return frigInput(inputProps)
  }

  _frigInputDefaults(key) {
    return {
      ref:                    `${key}Input`,
      key:                    `${key}Input`,
      name:                   key,
      valueLink: {
        value: this._initialValues()[key],
        requestChange: this._onFriggingChildChange.bind(this, [key]),
      },
      onFriggingChildInit:    this._onFriggingChildInit.bind(this, [key]),
    }
  }

  _frigGuessInputType(inputProps) {
    let jsType = typeof inputProps.valueLink.value
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
    else if (inputProps.name.match(/[pP]assword^/)) {
      return "password"
    }
    else {
      return "string"
    }
  }

  _getThemedInputComponent(props, componentName) {
    if (componentName == null) {
      throw `${props.key}: No type mapping found for type ${props.type}`
    }
    let component = this.props.theme.component(componentName)
    if (component == null) {
      throw `${props.key}: No ${componentName} component found in theme`
    }
    return component
  }

}
