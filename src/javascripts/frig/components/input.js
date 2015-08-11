let React                         = require("react")
let frigValidations               = require("../validations.js")
let {entries, humanize}           = require("../util.js")

export default class FrigInput extends React.Component {

  static propTypes = {
    name:            React.PropTypes.string.isRequired,
    component:       React.PropTypes.func.isRequired,
    valueLink:       React.PropTypes.object.isRequired,
    theme:           React.PropTypes.object.isRequired,
    type:            React.PropTypes.string,
    options:         React.PropTypes.array,
    layout:          React.PropTypes.string,
    className:       React.PropTypes.string,
    disabled:        React.PropTypes.bool,
    multiple:        React.PropTypes.bool,
    validate:        React.PropTypes.bool.isRequired,
    // Callbacks (Public API)
    onChange:        React.PropTypes.func.isRequired,
    onValidChange:   React.PropTypes.func.isRequired,
    // Callbacks (Private API - reserved for form use only)
    onFriggingChildInit: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    theme:           undefined,
    validate:        true,
    onChange:        () => {},
    onValidChange:   () => {},
    onFriggingChildInit: () => {},
  }

  state = {}

  /*
   * =========================================================================
   * Public Functions
   * =========================================================================
   */

  validate() {
    let errors = this._errors()
    this.setState({validationRequested: true})
    return errors == null
  }

  /*
   * =========================================================================
   * React Lifecycle + Render
   * =========================================================================
   */

  componentWillMount() {
    let valid = this._errors() == null
    this.props.onFriggingChildInit(this._value(), valid)
  }

  render() {
    return this.props.component(this._themedInputProps())
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _propsWillUpdate(nextProps) {
    if (this._value() !== nextProps.valueLink.value) {
      console.log("PROPS", nextProps.valueLink.value)
    }
    this.validate(nextProps)
  }

  _errors(value = this._value()) {
    if (!this._isModified() && !this.state.validationRequested) return undefined
    if (this.props.type === "submit" || this.props.validate === false) {
      this.setState({errors: undefined})
      return true
    }
    let errors = []
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
    // If there are no errors then errors should be falsie
    if (errors.length === 0) errors = undefined
    // Return the errors
    return errors
  }

  _value() {
    return this.props.valueLink.value
  }

  _isModified() {
    return this.state.modified != null
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
      modified: this._isModified(),
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
      required: nextProps.type !== "boolean",
    }
    let validations = {}
    for (let [k] of entries(frigValidations)) {
      validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k]
    }
    return validations
  }

  _onChange(val) {
    if (this.props.type === "submit") return
    // Set the state and run validations
    this.setState({modified: true})
    let valid = this.validate({valueLink: {value: val}})
    // Update the value link (used by Frig form components)
    this.props.valueLink.requestChange(val, valid)
    // Run the external callbacks (external API, not used by Frig internally)
    this.props.onChange(val, valid)
    if (valid) this.props.onValidChange(val, valid)
  }

  _onBlur() {
    this.validate()
  }

}
