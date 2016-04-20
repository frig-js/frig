import React from 'react'
import higherOrderComponent from './higher_order_component.js'

@higherOrderComponent()
export default class ErrorsNormalizer extends React.Component {
  static propTypes = {
    errors: React.PropTypes.object,
  }
  /* errors: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
  */
  static displayName = 'Frig.HigherOrderComponents.ErrorsNormalizer'

  // _toErrorObject(errors) {
  //   const isArray = Array.isArray(errors)
  //   if (errors == null || (isArray && errors.length === 0)) return {}
  //   // If errors is an array then convert it into an object. 'base' is
  //   // used to store all top-level errors that are not specific to an
  //   // input.
  //   if (isArray) {
  //     return { base: errors }
  //   }

  //   return errors
  // }

  // _errors() {
  //   return this._toErrorObject(this.props.errors)
  // }

  _normalizedErrors() {
    const errors = this.props.errors
    // let normalizedErrorClass = opts.as
    // const normalizedErrorClass = this.opts().as
    // Convert the errors object into the normalized error class

    console.log("errors", errors)
    // if (normalizedErrorClass === Array) {
    console.log("Object.keys(errors).map((k) => errors[k])", Object.keys(errors).map((k) => errors[k]))
    return Object.keys(errors).map((k) => errors[k])
    // }
    // if (normalizedErrorClass === Object) {
    //   return errors
    // }
    // throw new Error('ErrorsNormalizer \'as\' attribute must be either Array or Object')
  }

  render() {
    const ComponentClass = this.ComponentClass() // eslint-disable-line new-cap
    const childProps = Object.assign({}, this.props, {
      ref: 'child',
      errors: this._normalizedErrors(),
    })
    return <ComponentClass {...childProps} />
  }

}
