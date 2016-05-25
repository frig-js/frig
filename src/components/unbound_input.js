import React from 'react'

import frigValidations from '../validations.js'
import { entries, humanize } from '../util.js'
import typeMappings from '../type_mapping.js'

export default class UnboundInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    errors: React.PropTypes.array,
    layout: React.PropTypes.string,
    align: React.PropTypes.string,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    multiple: React.PropTypes.bool,
    type: React.PropTypes.string,
    options: React.PropTypes.array,
    validate: React.PropTypes.bool,
    value: React.PropTypes.any,
    saved: React.PropTypes.bool,
    // Callbacks (Public API)
    onChange: React.PropTypes.func.isRequired,
    onValidChange: React.PropTypes.func.isRequired,
    inputHtml: React.PropTypes.object,
  }


  static contextTypes = {
    frigForm: React.PropTypes.shape({
      theme: React.PropTypes.object.isRequired,
      layout: React.PropTypes.string.isRequired,
      align: React.PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    validate: true,
    disabled: false,
    errors: [],
    onChange: () => {},
    onValidChange: () => {},
  }

  displayName = 'Frig.UnboundInput'

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
    this.setState({ validationRequested: true })
    return this.isValid()
  }

  isValid() {
    return this._errors() == null
  }

  isModified() {
    return this.state.modified
  }

  resetModified() {
    this.setState({ modified: false })
  }

  reset() {
    this.setState({
      modified: false,
      validationRequested: false,
    })
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _errors(nextValue = this._value()) {
    let errors = this.props.errors
    const validate = (
      (this.isModified() || this.state.validationRequested) &&
      this.props.validate
    )
    if (validate) {
      // Create themed props for the next nextValue passed to this function
      const nextProps = Object.assign({}, this.props)
      nextProps.value = nextValue

      // Running each validation
      for (const [k, validationOpts] of entries(this._validations())) {
        if (validationOpts === false || validationOpts == null) continue
        errors = errors.concat(
          frigValidations[k](nextProps, validationOpts) || []
        )
      }
    }
    // If there are no errors then errors should be falsie
    if (errors.length === 0) errors = undefined
    // Return the errors
    return errors
  }

  _value() {
    return this.props.value
  }

  _themedInputProps(nextProps = this.props) {
    const title = nextProps.title || humanize(nextProps.name)
    // Defaults
    const defaults = {
      title,
      label: title,
      placeholder: title,
      layout: this.context.frigForm.layout,
      align: this.context.frigForm.align,
    }
    // Mixing in the defaults
    const themedProps = Object.assign(defaults, nextProps)
    const themedInputHtml = themedProps.inputHtml || {}
    // Overrides
    const overrides = {
      options: (nextProps.options || []).map(this._normalizeOption),
      modified: this.isModified(),
      // DOM attributes for the label element
      labelHtml: Object.assign({}, themedProps.labelHtml || {}, {
        htmlFor: themedProps.name,
      }),
      // DOM attributes + React ref + callbacks for the input element
      inputHtml: Object.assign({}, themedInputHtml, {
        onBlur: this._onBlur.bind(this),
        autoFocus: themedProps.autoFocus,
        className: themedProps.className,
        disabled: themedProps.disabled,
        multiple: themedProps.multiple,
        name: themedProps.name,
        placeholder: themedProps.placeholder,
        type: themedInputHtml.type || this._typeMapping().htmlInputType,
        ref: 'input',
      }),
      value: this._value(),
      onChange: this._onChange.bind(this),
      errors: this._errors(),
    }
    // TODO: Add type mapping

    // console.log('UnboundInput#_themedInputProps() rv:')
    // console.log(Object.assign(themedProps, overrides))

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
  _normalizeOption(option) {
    if (option == null) return undefined

    // if option is an object with a label and a key return it unchanged
    if (option.label != null) return option

    // converting option in the format of [key] to key
    if (typeof option === 'object' && option.length === 1) {
      return {
        value: option[0],
        label: option[0],
      }
    }

    // if option is in the format [key, value]
    if (typeof option === 'object' && option.length === 2) {
      return {
        value: option[0],
        label: option[1],
      }
    }
    // if option is in the format key
    return {
      value: option,
      label: option,
    }
  }

  _validations(nextProps = this.props) {
    // Validations (these get mixed into the overrides)
    const defaults = {
      required: true,
    }
    const validations = {}
    for (const [k] of entries(frigValidations)) {
      validations[k] = nextProps[k] == null ? defaults[k] : nextProps[k]
    }
    return validations
  }

  _onChange(val, opts) {
    let realValue = val

    // `val` could be a real value, or it could be a SyntheticEvent
    // This is because some components call this onChange event directly.
    // Previously, this was implemented with valueLink.requestChange,
    // which does not use SyntheticEvents (just values directly), but
    // that is deprecated as of React 15.
    //
    // FIXME: At some point in the event bubble flow the event should
    // be converted to a value, and passed to a function named something
    // other than onChange.
    if (val && val.target && val.target.value) { // SyntheticEvent
      realValue = val.target.value
    }

    if (this.props.type === 'submit') return
    // Set the state and run validations
    if ((opts || {}).setModified !== false) {
      this.setState({ modified: true })
    }
    const valid = this._errors(realValue) == null
    this.props.onChange(realValue, valid)
    if (valid) this.props.onValidChange(realValue, valid)
  }

  _onBlur() {
    this.validate()
    const inputHtml = this.props.inputHtml
    if (inputHtml != null && inputHtml.onBlur != null) inputHtml.onBlur()
  }

  _guessInputType() {
    const value = this._value()
    const jsType = typeof value
    if (this.props.type != null) {
      return this.props.type
    } else if (this.props.options != null) {
      return 'select'
    } else if (jsType === 'boolean') {
      return 'boolean'
    } else if (jsType === 'number') {
      return 'float'
    } else if (this.props.name.match(/password/i)) {
      return 'password'
    }

    return 'string'
  }

  // Generate the type mapping for an input component
  _typeMapping() {
    const typeMapping = Object.assign(
      {},
      typeMappings,
      this.context.frigForm.theme.type_mapping,
    )
    return typeMapping[this._guessInputType()]
  }

  _themedComponent() {
    const { name, type } = this.props
    const typeName = this._typeMapping()
    if (typeName == null) {
      throw new Error(`${name}: No type mapping found for type ${type}`)
    }

    const component = this.context.frigForm.theme[typeName.component]
    if (component == null) {
      throw new Error(`${name}: No ${typeName.component} component found in theme`)
    }
    return component
  }

  /*
   * =========================================================================
   * React Lifecycle + Render
   * =========================================================================
   */

  render() {
    let ThemedComponent = this._themedComponent()
    return <ThemedComponent {...this._themedInputProps()} />
  }
}
