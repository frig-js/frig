let React = require("react")

/*
 * A higher order component that passes a focused attribute to it's child
 * component. The focused is true when the component should be focused
 * (ie. when it is clicked on or tabbed into) and false when it is not (ie.
 * initially, when it is clicked off of and when another input is selected).
 *
 * This is useful for implementing popups in Frig Themes.
 */
module.exports = function(opts = {as: Object}) {
  return function(componentClass) {
    let childName = componentClass.prototype.displayName

    return class extends React.Component {
      displayName = `Frig.HigherOrderComponents.ErrorNormalizer(${childName})`

      static propTypes = {
        errors: React.PropTypes.oneOfType([
          React.PropTypes.object,
          React.PropTypes.array,
        ]),
        internalErrors: React.PropTypes.oneOfType([
          React.PropTypes.object,
          React.PropTypes.array,
        ]),
      }

      static defaultProps = componentClass.defaultProps

      _toErrorObject(errors) {
        let isArray = Array.isArray(errors)
        if (errors == null || (isArray && errors.length == 0)) return {}
        // If errors is an array then convert it into an object. "base" is used
        // to store all top-level errors that are not specific to an input.
        if (isArray) errors = {base: errors}
        return errors
      }

      _errors() {
        let errors = {}
        for (let k of ["errors", "internalErrors"]) {
          let errorsSubset = this._toErrorObject(this.props[k])
          for (let k2 in errorsSubset) {
            errors[k2] = (errors[k2] || []).concat(errorsSubset[k2])
          }
        }
        return errors
      }

      _normalizedErrors() {
        let errors = this._errors()
        let normalizedErrorClass = opts.as
        // Convert the errors object into the normalized error class
        if (normalizedErrorClass == Array) {
          let errorsArray = []
          for (let k in errors) errorsArray = errorsArray.concat(errors[k])
          return errorsArray
        }
        else if (normalizedErrorClass == Object) {
          return errors
        }
        else {
          throw(
            "ErrorsNormalizer \"as\" attribute must be either Array or Object"
          )
        }
      }

      render() {
        let childProps = Object.assign({}, this.props, {
          errors: this._normalizedErrors(),
        })
        delete childProps.internalErrors

        return React.createElement(componentClass, childProps)
      }

    }
  }
}