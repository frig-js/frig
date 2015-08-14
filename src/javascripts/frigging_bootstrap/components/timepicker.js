let React = require("react")
let cx = require("classnames")
let popup = React.createFactory(require("./timepicker_popup"))
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.TimePicker"

  static defaultProps = Object.assign(require("../default_props.js"))

  state = {
    showPopup: false,
  }

  _onInputClick() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  _input() {
    return input(Object.assign({}, this.props.inputHtml, {
        valueLink: this.props.valueLink,
        className: cx(this.props.inputHtml.className, "form-control"),
        onClick: this._onInputClick.bind(this),
      })
    )
  }

  _inputPopup() {
    if(this.state.showPopup === false) return

    return popup({ valueLink: this.props.valueLink })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        div({},
          label(this.props)
        ),
        this._input(),
        errorList(this.props.errors),
      ),
      this._inputPopup(),
    )
  }

}
