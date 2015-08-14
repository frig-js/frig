let React = require("react")
let cx = require("classnames")
let booleanHOC = require("frig/higher_order_components/boolean")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")

let {div, span} = React.DOM

@booleanHOC
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

  _isChecked() {
    return this.props.valueLink.value
  }

  _onClick() {
    if (this.props.disabled === true) return
    this.props.valueLink.requestChange(!this.props.valueLink.value)
  }

  _switchCx() {
    return cx(
      "bootstrap-switch",
      "bootstrap-switch-wrapper",
      "bootstrap-switch-on",
      "bootstrap-switch-id-switch-state",
      "bootstrap-switch-animate",
      {
        [`bootstrap-switch-${this.props.size}`]: this.props.size != null,
        "bootstrap-switch-disabled": this.props.disabled,
      },
    )
  }

  _onSpanCx() {
    return cx("bootstrap-switch-handle-on", {
      [`bootstrap-switch-${this.props.onColor}`]: this.props.onColor != null,
    })
  }

  _offSpanCx() {
    return cx("bootstrap-switch-handle-off", {
      [`bootstrap-switch-${this.props.offColor}`]: this.props.offColor != null,
    })
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

  _input() {
    return div({
        className: `bootstrap-switch-container`,
        ref: "switchContainer",
        onClick: this._onClick.bind(this),
        style: {marginLeft: this._isChecked() ? "0" : "-50px"},
      },
      span({className: this._onSpanCx()},
        this.props.onText
      ),
      span({className: `bootstrap-switch-label`},
        "\u00a0"
      ),
      span({className: this._offSpanCx()},
        this.props.offText
      ),
    )
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        div({className: this._labelContainerCx()},
          label(this.props)
        ),
        div({className: this._inputContainerCx()},
          div({className: this._switchCx()},
            this._input(),
          ),
          errorList(this.props.errors),
        ),
      ),
    )
  }

}
