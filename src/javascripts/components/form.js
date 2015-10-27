let React = require("react")
let frigInput = require("./input.js")
let propsClosure = require("../higher_order_components/props_closure.js")
let NestedFeildset = require("./nested_fieldset")
let ErrorsNormalizer = require("../higher_order_components/errors_normalizer.js")

/*
 * A JSX-compatible React DOM Component.
 * FrigForm should be used as the top level component for Frig forms in JSX.
 * In coffeescript FrigForm is called by FrigDSL.
 */
@ErrorsNormalizer({as: Object})
export default class FrigForm extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    errors: React.PropTypes.object.isRequired,
    saved: React.PropTypes.object.isRequired,
    form: React.PropTypes.func.isRequired,
    theme: React.PropTypes.object.isRequired,
    typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
    layout: React.PropTypes.string.isRequired,
    align: React.PropTypes.string.isRequired,
    // Callbacks
    onSubmit: React.PropTypes.func,
  }

  static defaultProps = {
    errors: [],
    saved: {},
    theme: undefined,
    typeMapping: {},
    layout: "vertical",
    align: "left",
    onSubmit() {},
  }

  _childComponentsByName = []

  /*
   * =========================================================================
   * Public Functions
   * =========================================================================
   */

  validate() {
    return this._childComponents().filter((c) => !c.validate()).length === 0
  }

  isValid() {
    return this._childComponents().filter((c) => !c.isValid()).length === 0
  }

  isModified() {
    return this._childComponents().filter((c) => c.isModified()).length !== 0
  }

  modifiedValues() {
    return this._childComponents()
      .filter((c) => c.isModified())
      .map((c) => {
        let componentName = c.props.name
        let d = {}
        d[componentName] = (c.modifiedValues == null) ? c.modifiedValue() : c.modifiedValues()
        return d
      })
      .reduce((preValue, value) => {
        let key = Object.keys(value)[0]
        preValue[key] = value[key]
        return preValue
      }, {})
  }

  resetModified() {
    for (let c of this._childComponents()) c.resetModified()
  }

  reset() {
    for (let c of this._childComponents()) c.reset()
  }

  /*
   * =========================================================================
   * React Lifecycle + Render
   * =========================================================================
   */

  componentWillMount() {
    this._updateDataLink(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this._updateDataLink(nextProps)
  }

  render() {
    // Nested forms (forms inside nested fieldsets)
    if (this.props.nestedForm) {
      return React.DOM.div({}, this._friggingChildren())
    }
    // Top-level forms
    else {
      let themedForm = this.props.theme.component("form")
      let props = this._themedFormProps()
      let children = this._friggingChildren()
      return React.createElement(themedForm, props, children)
    }
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
   * Normalizes a valueLink-type data object out of the nextProps regardless of
   * whether the nextProps.data is a value or value link and stores it in state.
   *
   * If the nextProps.data is a valueLink then state.dataLink is a reference
   * to that same valueLink object.
   *
   * If the nextProps.data is not a valueLink then state.dataLink is a valueLink
   * to this component's state (only updating it's internal value). In this
   * scenario changes to nextProps.data will override any state stored in the
   * dataLink.
   */
  _updateDataLink(nextProps) {
    let data = nextProps.data || {}
    let {requestChange} = data
    let dataLink = {
      value: (requestChange ? data.value : data) || {},
      requestChange: requestChange || ((data) => this._updateDataLink({data})),
    }
    this.setState({dataLink})
  }

  _data() {
    return this.state.dataLink.value
  }

  // Generates React DOM elements to pass to the themed form component as
  // child components.
  _friggingChildren() {
    return this.props.form(this._componentClasses())
  }

  childComponentWillMount(name, component) {
    this._childComponentsByName[name] = component
  }

  childComponentWillUnmount(name) {
    delete this._childComponentsByName[name]
  }

  _childComponents() {
    let list = []
    let componentsByName = this._childComponentsByName
    for (let k in componentsByName) list.push(componentsByName[k])
    return list
  }

  _onChildRequestChange(k, v) {
    // Update the ReactLink with a copy of the existing data merged with this
    // new input value
    this.state.dataLink.requestChange(Object.assign({}, this._data(), {[k]: v}))
  }

  _onSubmit(e) {
    if (!this.validate()) return e.preventDefault()
    this.props.onSubmit(e)
  }


  _guessInputType(inputProps) {
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
    else if (inputProps.name.match(/password$/i)) {
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

  /*
   * =========================================================================
   * DSL
   * =========================================================================
   */

  /*
   * Component classes for children
   */
  _componentClasses() {
    if (this._componentClassesCache != null) return this._componentClassesCache
    return this._componentClassesCache = {
      errors: this._errorsComponentClass(),
      input: this._inputComponentClass(),
      nestedFields: this._nestedFieldsComponentClass(),
      submit: this._submitComponentClass(),
    }
  }

  _errorsComponentClass() {
    // Returning a input component modified with this form's defaults and
    // overrides
    let mapping = this._typeMapping().errors
    let component = this._getThemedInputComponent({}, mapping.component)
    let {layout, align} = this.props
    return propsClosure(component, {
      defaults: {key: "errors", layout, align},
      overrides: this._errorsOverrides.bind(this),
    })
  }

  _errorsOverrides() {
    return {
      type: "errors",
      errors: this.props.errors.base || [],
    }
  }

  _nestedFieldsComponentClass() {
    // Returning a frig form component with this form's props set as defaults
    return propsClosure(NestedFeildset, {
      defaults: this._nestedFieldsDefaults.bind(this),
    })
  }

  _nestedFieldsDefaults({name}) {
    return {
      key: `${name}-nestedfields`,
      layout: this.props.layout,
      align: this.props.align,
      theme: this.props.theme,
      typeMapping: this.props.typeMapping,
      onComponentMount: this.childComponentWillMount.bind(this, [name]),
      onComponentUnmount: this.childComponentWillUnmount.bind(this, [name]),
      data: {
        value: this._data()[name] || {},
        requestChange: this._onChildRequestChange.bind(this, [name]),
      },
      internalErrors: this.props.errors[name],
      saved: this.props.saved[name],
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
    let {layout, align} = this.props
    return propsClosure(component, {
      defaults: {key: "submit", layout, align},
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
      layout: this.props.layout,
      align: this.props.align,
      key: `${name}-input`,
      valueLink: {
        value: this._data()[name],
        requestChange: this._onChildRequestChange.bind(this, [name]),
      },
      onComponentMount: this.childComponentWillMount.bind(this, [name]),
      onComponentUnmount: this.childComponentWillUnmount.bind(this, [name]),
      internalErrors: this.props.errors[name],
      saved: this.props.saved[name],
    }
  }

  _inputOverrides(inputProps) {
    let name = inputProps.name
    // Guessing the type and using it to lookup the template
    let type = this._guessInputType(inputProps)
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

}
