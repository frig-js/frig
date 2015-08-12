let React = require("react")
let frigInput = require("./input.js")
let propsClosure = require("../higher_order_functions/props_closure.js")
let {entries} = require("../util.js")

/*
 * A JSX-compatible React DOM Component.
 * FrigForm should be used as the top level component for Frig forms in JSX.
 * In coffeescript FrigForm is called by FrigDSL.
 */
export default class FrigForm extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
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
  _typeMapping() {
    return Object.assign(
      {},
      require("../type_mapping.js"),
      this.props.theme.type_mapping,
    )
  }

  /*
   * Returns a value link-type object regardles of whether the data property is
   * a value or value link
   */
  _dataLink() {
    if (this.props.data.requestChange) {
      return this.props.data
    }
    else {
      return {
        value: this.props.data,
        requestChange: () => {},
      }
    }
  }

  _data() {
    return this._dataLink().value
  }

  // Generates React DOM elements to pass to the themed form component as
  // child components.
  _friggingChildren() {
    return this.props.form(this._componentClasses())
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
    let reactLinkData = Object.assign({}, this._data(), formData)
    // Notify the event listeners
    this.props.onChange(formData)
    if (valid) this.props.onValidChange(formData)
    // Update the ReactLink with the merged combination of form data and the
    // initial values passed in to the form (allowing non-form data to be
    // persisted)
    this._dataLink().requestChange(reactLinkData)
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

  /*
   * Component classes for children
   */
  _componentClasses() {
    return {
      errors: this._errorsComponentClass(),
      input: this._inputComponentClass(),
      submit: this._submitComponentClass(),
    }
  }

  _errorsComponentClass() {
    // Returning a input component modified with this form's defaults and
    // overrides
    let mapping = this._typeMapping().errors
    let component = this._getThemedInputComponent({}, mapping.component)
    return propsClosure(component, {
      defaults: {key: "errors"},
      overrides: this._errorsOverrides.bind(this),
    })
  }

  _errorsOverrides() {
    return {
      type: "errors",
      errors: this.props.errors,
    }
  }

  // Create a submit button
  // value: [STRING] The label text for the submit button
  // props: [OBJECT] properties to send to the React Component (see input props)
  _submitComponentClass() {
    // Returning a input component modified with this form's defaults and
    // overrides
    let mapping = this._typeMapping().submit
    let component = this._getThemedInputComponent({}, mapping.component)
    return propsClosure(component, {
      defaults: {key: "submit"},
      overrides: this._submitOverrides.bind(this),
    })
  }

  _submitOverrides(submitProps) {
    return {
      type: "submit",
      inputHtml: {
        defaultValue: submitProps.value,
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
  _inputComponentClass() {
    // Returning a input component modified with this form's defaults and
    // overrides
    return propsClosure(frigInput, {
      defaults: this._inputDefaults.bind(this),
      overrides: this._inputOverrides.bind(this),
    })
  }

  _inputDefaults({name}) {
    return {
      name,
      key: `${name}Input`,
      valueLink: {
        value: this._data()[name],
        requestChange: this._onFriggingChildChange.bind(this, [name]),
      },
      onFriggingChildInit: this._onFriggingChildInit.bind(this, [name]),
    }
  }

  _inputOverrides(inputProps) {
    let name = inputProps.name
    // Guessing the type and using it to lookup the template
    let type = this._frigGuessInputType(inputProps)
    // looking up the template name with the type mappings and the type
    let mapping = this._typeMapping()[type]
    let component = this._getThemedInputComponent(inputProps, mapping.component)
    let inputHtmlDefaults = {type: mapping.htmlInputType}
    // Generating the overrides object
    return Object.assign({}, inputProps, {
      type,
      component,
      ref: `${name}Input`,
      inputHtml: Object.assign(inputHtmlDefaults, inputProps.inputHtml),
    })
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
      throw `${props.name}: No type mapping found for type ${props.type}`
    }
    let component = this.props.theme.component(componentName)
    if (component == null) {
      throw `${props.name}: No ${componentName} component found in theme`
    }
    return component
  }

}
