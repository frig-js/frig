let React                         = require("react")
let frigValidations               = require("../validations.js")
let {entries, humanize}           = require("../util.js")
let ErrorsNormalizer = require("../higher_order_components/errors_normalizer.js")

@ErrorsNormalizer({as: Array})
export default class FrigInput extends React.Component {

  static propTypes = {
    name:            React.PropTypes.string.isRequired,
    component:       React.PropTypes.func.isRequired,
    valueLink:       React.PropTypes.object.isRequired,
    theme:           React.PropTypes.object.isRequired,
    errors:          React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    type:            React.PropTypes.string,
    options:         React.PropTypes.array,
    layout:          React.PropTypes.string,
    className:       React.PropTypes.string,
    disabled:        React.PropTypes.bool,
    multiple:        React.PropTypes.bool,
    saved:           React.PropTypes.bool,
    validate:        React.PropTypes.bool.isRequired,
    // Callbacks (Public API)
    onChange:        React.PropTypes.func.isRequired,
    onValidChange:   React.PropTypes.func.isRequired,
    // Callbacks (Private API - reserved for form use only)
    onComponentMount: React.PropTypes.func.isRequired,
    onComponentUnmount: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    theme: undefined,
    validate: true,
    saved: false,
    errors: [],
    onChange: () => {},
    onValidChange: () => {},
    onComponentMount: () => {},
    onComponentUnmount: () => {},
  }

  state = {
    modified: false,
    validationRequested: false
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
    this.props.onComponentMount(this)
  }

  componentWillUnmount() {
    this.props.onComponentUnmount(this)
  }

  render() {
    return React.createElement(this.props.component, this._themedInputProps())
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _errors(value = this._value()) {
    let errors = this.props.errors.slice()
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
    return this.props.valueLink.value
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
    this.props.valueLink.requestChange(val, valid)
    // Run the external callbacks (external API, not used by Frig internally)
    this.props.onChange(val, valid)
    if (valid) this.props.onValidChange(val, valid)
  }

  _onBlur() {
    this.validate()
    let inputHtml = this.props.inputHtml
    if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur()
  }

}
