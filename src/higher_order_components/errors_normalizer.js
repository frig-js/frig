import React from "react"
import higherOrderComponent from "./higher_order_component.js"

@higherOrderComponent()
export default class extends React.Component {
  displayName = "Frig.HigherOrderComponents.ErrorNormalizer"

  static propTypes = {
    errors: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
  }

  _toErrorObject(errors) {
    let isArray = Array.isArray(errors)
    if (errors == null || (isArray && errors.length === 0)) return {}
    // If errors is an array then convert it into an object. "base" is
    // used to store all top-level errors that are not specific to an
    // input.
    if (isArray) errors = {base: errors}
    return errors
  }

  _errors() {
    let errors = {}
    let errorsSubset = this._toErrorObject(this.props.errors)
    for (let k in errorsSubset) {
      errors[k] = (errors[k] || []).concat(errorsSubset[k])
    }
    return errors
  }

  _normalizedErrors() {
    let errors = this._errors()
    // let normalizedErrorClass = opts.as
    let normalizedErrorClass = this.opts().as
    // Convert the errors object into the normalized error class
    if (normalizedErrorClass === Array) {
      let errorsArray = []
      for (let k in errors) errorsArray = errorsArray.concat(errors[k])
      return errorsArray
    }
    else if (normalizedErrorClass === Object) {
      return errors
    }
    else {
      throw(
        "ErrorsNormalizer \"as\" attribute must be either Array or Object"
      )
    }
  }

  render() {
    let ComponentClass = this.ComponentClass()
    let childProps = Object.assign({}, this.props, {
      ref: "child",
      errors: this._normalizedErrors(),
    })
    return <ComponentClass {...childProps}/>
  }

}
