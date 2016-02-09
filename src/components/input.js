import React from "react"
import frigValidations from "../validations.js"
import {entries, humanize} from "../util.js"
import ErrorsNormalizer from "../higher_order_components/errors_normalizer.js"

@ErrorsNormalizer({
  as: Array,
  publicFunctions: [
    "validate",
    "isValid",
    "isModified",
    "resetModified",
    "reset",
  ],
})
export default class Input extends React.Component {
  displayName = "Frig.Input"

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    layout: React.PropTypes.string,
    className: React.PropTypes.string,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    multiple: React.PropTypes.bool,
    type: React.PropTypes.string,
    options: React.PropTypes.array,
    validate: React.PropTypes.bool,
    // Callbacks (Public API)
    onChange: React.PropTypes.func.isRequired,
    onValidChange: React.PropTypes.func.isRequired,
  }

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      data: React.PropTypes.object.isRequired,
      theme: React.PropTypes.object.isRequired,
      errors: React.PropTypes.object.isRequired,
      layout: React.PropTypes.string.isRequired,
      saved: React.PropTypes.object.isRequired,
      // Callbacks (Private API - reserved for frig form use only)
      requestChildComponentChange: React.PropTypes.func.isRequired,
      childComponentWillMount: React.PropTypes.func.isRequired,
      childComponentWillUnmount: React.PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    validate: true,
    disabled: false,
    errors: [],
    onChange: () => {},
    onValidChange: () => {},
  }

  state = {
    modified: false,
    validationRequested: false,
  }

  /*
   * =========================================================================
   * Public Functions
   * =========================================================================
   */

  validate() {
    this.setState({validationRequested: true})
    return this.isValid()
  }

  isValid() {
    return this._errors() == null
  }

  isModified() {
    return this.state.modified
  }

  resetModified() {
    this.setState({modified: false})
  }

  reset() {
    this.setState({
      modified: false,
      validationRequested: false,
    })
  }

  /*
   * =========================================================================
   * React Lifecycle + Render
   * =========================================================================
   */

  componentWillMount() {
    this.context.frigForm.childComponentWillMount(this.props.name, this)
  }

  componentWillUnmount() {
    this.context.frigForm.childComponentWillUnmount(this.props.name, this)
  }

  render() {
    let ThemedComponent = this._themedComponent()
    return <ThemedComponent {...this._themedInputProps()}/>
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _errors(value = this._value()) {
    let errors = (this.props.errors||[]).slice().concat(
      this.context.frigForm.errors[this.props.name] || []
    )
    let validate = (
      (this.isModified() || this.state.validationRequested) &&
      this.props.validate
    )
    if (validate) {
      // Running each validation
      for (let [k, validationOpts] of entries(this._validations())) {
        if (validationOpts === false || validationOpts == null) continue
        let opts = {
          data:   this.props.data,
          name:   this.props.name,
          value:  value,
          opts:   validationOpts,
        }
        errors = errors.concat(frigValidations[k](opts) || [])
      }
    }
    // If there are no errors then errors should be falsie
    if (errors.length === 0) errors = undefined
    // Return the errors
    return errors
  }

  _value() {
    return this.context.frigForm.data[this.props.name]
  }

  _themedInputProps(nextProps = this.props) {
    let title = nextProps.title || humanize(nextProps.name)
    // Defaults
    let defaults = {
      title:           title,
      label:           title,
      placeholder:     title,
    }
    // Mixing in the defaults
    let themedProps = Object.assign(defaults, nextProps)
    // Overrides
    let overrides = {
      options: (nextProps.options || []).map(this._normalizeOption),
      modified: this.isModified(),
      // DOM attributes for the label element
      labelHtml: Object.assign({}, themedProps.labelHtml || {}, {
        htmlFor:       themedProps.name,
      }),
      // DOM attributes + React ref + callbacks for the input element
      inputHtml: Object.assign({}, themedProps.inputHtml || {}, {
        onBlur:        this._onBlur.bind(this),
        autoFocus:     themedProps.autoFocus,
        className:     themedProps.className,
        disabled:      themedProps.disabled,
        multiple:      themedProps.multiple,
        name:          themedProps.name,
        placeholder:   themedProps.placeholder,
        // type:          themedProps.typeMapping[themedProps.type].htmlInputType,
        ref:           "input",
      }),
      valueLink: {
        value: this._value(),
        requestChange: this._onChange.bind(this),
      },
      errors: this._errors(),
    }
    // TODO: Add type mapping
    return Object.assign(themedProps, overrides)
  }

  /*
   * Normalizes a set of arguments into an object with a value and a label
   * to be used to generate an option DOM element for use in a select input.
   * Accepts:
   * - a string (taken as both the label and value)
   * - an array of length 1 (first argument is both the label and value)
   * - an array of length 2 (first argument is the value, second is the label)
   * - an object with a value and label key (passthrough / no-change)
   */
  _normalizeOption (option) {
    if (option == null) return undefined
    // if option is an object with a label and a key return it unchanged
    if (option.label != null && option.value != null) return option
    // converting option in the format of [key] to key
    if (typeof option == "object" && option.length === 1) option = option[0]
    // if option is in the format [key, value]
    if (typeof option == "object" && option.length === 2) {
      return {
        value: option[0],
        label: option[1],
      }
    }
    // if option is in the format key
    else {
      return {
        value: option,
        label: option,
      }
    }
  }

  _validations(nextProps = this.props) {
    // Validations (these get mixed into the overrides)
    let defaults = {
      required: true,
    }
    let validations = {}
    for (let [k] of entries(frigValidations)) {
      validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k]
    }
    return validations
  }

  _onChange(val, opts) {
    if (this.props.type === "submit") return
    // Set the state and run validations
    if ((opts||{}).setModified !== false) this.setState({modified: true})
    let valid = this._errors(val) == null
    // Update the value link (used by Frig form components)
    this.context.frigForm.requestChildComponentChange(this.props.name, val)
    // Run the external callbacks (external API, not used by Frig internally)
    this.props.onChange(val, valid)
    if (valid) this.props.onValidChange(val, valid)
  }

  _onBlur() {
    this.validate()
    let inputHtml = this.props.inputHtml
    if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur()
  }

  _guessInputType() {
    let value = this._themedInputProps().valueLink.value
    let jsType = typeof value
    if (this.props.type != null) {
      return this.props.type
    }
    else if (this.props.multiple || Array.isArray(value)) {
      return "multiselect"
    }
    else if (this.props.options != null) {
      return "select"
    }
    else if (jsType === "boolean") {
      return "boolean"
    }
    else if (jsType === "number") {
      return "float"
    }
    else if (this.props.name.match(/password$/i)) {
      return "password"
    }
    else {
      return "string"
    }
  }

  // Generate the type mapping for an input component
  _typeMapping() {
    let typeMapping = Object.assign(
      {},
      require("../type_mapping.js"),
      this.context.frigForm.theme.type_mapping,
    )
    return typeMapping[this._guessInputType()]
  }

  _themedComponent() {
    let {name} = this.props
    let type = this._typeMapping().component
    if (type == null) throw `${name}: No type mapping found`
    let component = this.context.frigForm.theme.component(type)
    if (component == null) throw `${name}: No ${type} component found in theme`
    return component
  }

}
