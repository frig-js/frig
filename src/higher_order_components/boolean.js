import React from 'react'

/*
 * A higher order function wrapper for components that only allow 2 possible
 * values in their props.values (an onValue and an offValue - true and false by
 * default).
 *
 * This component will call onChange for any invalid value to convert it
 * into the onValue or offValue.
 */
module.exports = function BooleanHOC(ComponentClass) {
  return class Boolean extends React.Component {
    static displayName = 'Frig.HigherOrderComponents.Boolean'

    static propTypes = {
      value: React.PropTypes.any,
      onChange: React.PropTypes.func.isRequired,
      onValue: React.PropTypes.any.isRequired,
      offValue: React.PropTypes.any.isRequired,
    }

    static defaultProps = {
      onValue: true,
      offValue: false,
    }

    constructor() {
      super()
      this._change = this._change.bind(this)
    }

    componentWillMount() {
      this._normalizeValue(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this._normalizeValue(nextProps)
    }

    _normalizeValue(nextProps) {
      const value = nextProps.value
      if (value !== this.props.offValue && value !== this.props.onValue) {
        this._change(value != null, { setModified: false })
      }
    }

    /*
     * Intercept the nested component's true/false value change and convert it
     * into an onValue or offValue before relaying it to onChange.
     */
    _change(val, ...args) {
      const upstreamVal = val ? this.props.onValue : this.props.offValue
      this.props.onChange(upstreamVal, ...args)
    }

    render() {
      const childProps = Object.assign({}, this.props, {
        ref: 'child',
        value: this.props.value === this.props.onValue,
        onChange: this._change,
      })
      return <ComponentClass {...childProps} />
    }

  }
}
