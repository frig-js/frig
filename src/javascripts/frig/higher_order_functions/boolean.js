let React = require("react")

/*
 * A higher order function wrapper for components that only allow 2 possible
 * values in their valueLinks (an onValue and an offValue - true and false by
 * default).
 *
 * This component will request a change to the valueLink for any invalid
 * valueLink value to convert it into the onValue or offValue.
 */
export default function(componentClass) {
  return class extends React.Component {

    static propTypes = {
      valueLink: React.PropTypes.object.isRequired,
      onValue: React.PropTypes.bool.isRequired,
      offValue: React.PropTypes.bool.isRequired,
    }

    static defaultProps = {
      onValue: true,
      offValue: false,
    }

    componentWillMount() {
      console.log("OUTER MOUNT")
      this._normalizeValue(this.props)
    }

    componentWillReceiveProps(nextProps) {
      this._normalizeValue(nextProps)
    }

    _normalizeValue(nextProps) {
      let value = nextProps.valueLink.value
      if (value !== this.props.offValue && value !== this.props.onValue) {
        nextProps.valueLink.requestChange(value != null)
      }
    }

    /*
     * Intercept the nested component's true/false value change and convert it
     * into an onValue or offValue before relaying it to the valueLink.
     */
    _onChange(val) {
      this.props.valueLink.requestChange(
        val ? this.props.onValue : this.props.offValue
      )
    }

    render() {
      let childProps = Object.assign({}, this.props, {
        valueLink: {
          value: this.props.valueLink.value === this.props.onValue,
          requestChange: this._onChange.bind(this),
        },
      })
      return React.createElement(componentClass, childProps)
    }

  }
}
