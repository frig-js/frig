let React = require("react")

/*
 * A higher order function wrapper for components that only allow true or false
 * values in their valueLinks.
 *
 * This component will request a change to the valueLink for any non-boolean
 * valueLink value to convert it into a boolean.
 */
export default function(component) {
  component = React.createFactory(component)

  return class extends React.Component {

    static propTypes = {
      valueLink: React.PropTypes.object.isRequired,
    }

    componentWillMount() {
      this._normalizeValue(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this._normalizeValue(nextProps)
    }

    _normalizeValue(nextProps) {
      let value = nextProps.valueLink.value
      if (value !== false && value !== true) {
        nextProps.valueLink.requestChange(value != null)
      }
    }

    render() {
      return component(this.props)
    }

  }
}
