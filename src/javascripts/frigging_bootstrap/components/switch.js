var React                                    = require("react")
var cx                                       = require("classnames")

var {errorList, sizeClassNames, formGroupCx} = require("../util.js")

var {div, span, label, input}                = React.DOM

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Switch"

  static defaultProps = Object.assign(require("../default_props.js"), {
    onColor:  "primary",
    onText:   "ON",
    offColor: "default",
    offText:  "OFF",
    size:     "normal",
  })

  constructor(props) {
    super(props)

    this.state = {
      errors: undefined,
      checked: true,
      bootstrapSwitchClasses: [
        "bootstrap-switch",
        "bootstrap-switch-wrapper",
        "bootstrap-switch-on",
        "bootstrap-switch-id-switch-state",
        "bootstrap-switch-animate",
      ],
    }
  }

  componentWillMount() {
    if (this.props.size !== undefined && this.props.size !== null) {
      this.setState({
        bootstrapSwitchClasses: this.state.bootstrapSwitchClasses.concat([
          `bootstrap-switch-${this.props.size}`,
        ]),
      })
    }
  }

  isChecked() {
    return this.state.checked
  }

  _inputHtml() {
    return div({
        className: `bootstrap-switch-container`,
        ref: "switchContainer",
        onClick: this._onClick.bind(this),
      },
      span({className: `bootstrap-switch-handle-on bootstrap-switch-${this.props.onColor}`}, this.props.onText),
      span({className: `bootstrap-switch-label`}, "\u00a0"),
      span({className: `bootstrap-switch-handle-off bootstrap-switch-${this.props.offColor}`}, this.props.offText),
    )
  }

  _onClick() {
    React.findDOMNode(this.refs.switchContainer).style.marginLeft = (this.state.checked === true) ? "-50px" : "0"
    this.setState({ checked: !this.state.checked })
  }

  _labelContainerCx() {
    return cx({
      "pull-left": this.props.layout === "horizontal",
    })
  }

  _inputContainerCx() {
    return cx({
      "pull-right": this.props.layout === "horizontal",
      "controls": this.props.layout === "vertical",
    })
  }

  _label() {
    if (this.props.label === null) return ""
    return label(this.props.labelHtml, this.props.label)
  }

  _errorList() {
    if (this.state.errors === null) return ""
    return errorList(this.state.errors)
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: this._labelContainerCx()},
        this._label(),
      ),
      div({className: this._inputContainerCx()},
        div({className: this.state.bootstrapSwitchClasses.join(" ")},
          this._inputHtml(),
          this._errorList(),
        )
      )
    )
  }

}
