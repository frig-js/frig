let React = require("react")

/*
 * A higher order function wrapper for components that only allow true or false
 * values in their valueLinks.
 *
 * This component will request a change to the valueLink for any non-boolean
 * valueLink value to convert it into a boolean.
 */
export default function(component, opts) {
  return class extends React.Component {
    _get(k, props) {
      if (typeof(opts[k]) == "function") {
        return opts[k](props)
      }
      else {
        return opts[k]
      }
    }

    render() {
      let childProps = {}
      // Adding the defaults
      childProps = Object.assign(childProps, this._get("defaults", this.props))
      // Adding the props
      childProps = Object.assign(childProps, this.props)
      // Adding the overrides
      childProps = Object.assign(childProps, this._get("overrides", childProps))
      // Rendering
      return React.createElement(component, childProps)
    }

  }
}
