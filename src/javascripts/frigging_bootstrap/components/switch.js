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
    disabled: false,
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
      bootstrapSwitchOnClassess: ["bootstrap-switch-handle-on"],
      bootstrapSwitchOffClassess: ["bootstrap-switch-handle-off"],
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

    if (this.props.onColor !== undefined && this.props.onColor !== null) {
      this.setState({
        bootstrapSwitchOnClassess: this.state.bootstrapSwitchOnClassess.concat([
          `bootstrap-switch-${this.props.onColor}`,
        ]),
      })
    }

    if (this.props.offColor !== undefined && this.props.offColor !== null) {
      this.setState({
        bootstrapSwitchOffClassess: this.state.bootstrapSwitchOffClassess.concat([
          `bootstrap-switch-${this.props.offColor}`,
        ]),
      })
    }
    
    if (this.props.disabled === true) {
      this.setState({
        bootstrapSwitchClasses: this.state.bootstrapSwitchClasses.concat([
          "bootstrap-switch-disabled",
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
      span({ 
          className: this.state.bootstrapSwitchOnClassess.join(" "),
        }, 
        this.props.onText
      ),
      span({ className: `bootstrap-switch-label` }, "\u00a0"),
      span({ 
          className: this.state.bootstrapSwitchOffClassess.join(" "), 
        }, 
        this.props.offText
      ),
    )
  }

  _onClick() {
    if (this.props.disabled === false) {
      React.findDOMNode(this.refs.switchContainer).style.marginLeft = (this.state.checked === true) ? "-50px" : "0"
      this.setState({ checked: !this.state.checked })
    }
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
