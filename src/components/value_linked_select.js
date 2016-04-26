import React from 'react'
import ReactDOM from 'react-dom'

/*
 * A minimal wrapper for the select component to provide the correct value
 * for valueLinks.
 *
 * Basically it's a solution to this: http://stackoverflow.com/q/24470852/386193
 *
 * Note: This class, unlike React.DOM.select, does not expect options to be
 * passed as child components. Instead you should pass your options as an array
 * of objects containing a label and a value.
 *
 * Example:
 *
 * ValueLinkedSelect({
 *   options: [
 *     {label: 'Canada', value: 'CA'}
 *     {label: 'United States', value: 'US'}
 *   ]
 * })
 *
 * Asside from the options change and the fact that valueLink works else should
 * be the same as React.DOM.select.
 *
 */
export default class ValueLinkedSelect extends React.Component {
  static displayName = 'Frig.ValueLinkedSelect'

  static propTypes = {
    valueLink: React.PropTypes.object.isRequired,
    options: React.PropTypes.array,
    multiple: React.PropTypes.bool,
  }

  static defaultProps = {
    options: [],
    multiple: false,
  }

  componentWillMount() {
    const hasOptions = this.props.options.length !== 0
    if (hasOptions && this.props.valueLink.value == null) {
      this._setInitialValue(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    const hasOptions = nextProps.options.length !== 0
    // Setting the intial value of the select when the options load
    if (hasOptions && nextProps.valueLink.value == null) {
      this._setInitialValue(nextProps)
    }
    // Nulling the select's value when the options are removed
    if (!hasOptions && nextProps.valueLink.value != null) {
      nextProps.valueLink.requestChange(undefined, { setModified: false })
    }
  }

  // If there are no null options then default a null value
  // to the first option
  _setInitialValue(nextProps) {
    if (nextProps.options.filter(({ value }) => value == null).length > 0) {
      return
    }
    const value = nextProps.valueLink.value || nextProps.options[0].value
    nextProps.valueLink.requestChange(value, { setModified: false })
  }

  // Reads the value from the DOM for the select input fields
  _getValue() {
    const el = ReactDOM.findDOMNode(this.refs.input)
    // The value is cast to a string when we get it from DOM.value. This is a
    // mapping of those strings to their original values in the options list.
    const originalValues = {}
    for (const option of this.props.options) {
      let valueHash = option.value
      if (valueHash != null) valueHash = option.value.toString()
      originalValues[valueHash] = option.value
    }
    if (el.type === 'select-multiple') {
      return el.options.filter((o) => o.selected).map((o) => originalValues[o.value])
    }
    if (el.value === '') {
      return null
    }
    return originalValues[el.value] || el.value
  }

  _onChange() {
    this.props.valueLink.requestChange(this._getValue())
  }

  _inputHtml() {
    let value = this.props.valueLink.value
    if (this.props.multiple) value = value.map((o) => o.value.toString())
    const inputHtml = Object.assign({}, this.props, {
      ref: 'input',
      valueLink: {
        value,
        requestChange: this._onChange.bind(this),
      },
    })
    return inputHtml
  }

  _selectOption(o) {
    const attrs = {
      key: `option-${o.label}`,
      value: o.value || '',
    }
    return <option {...attrs}>{o.label}</option>
  }

  render() {
    return (
      <select {...this._inputHtml()}>
        {this.props.options.map(this._selectOption)}
      </select>
    )
  }

}
