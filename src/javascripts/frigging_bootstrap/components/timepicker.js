let React = require("react")
let cx = require("classnames")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.TimePicker"

  static defaultProps = Object.assign(require("../default_props.js"))

  _input() {
    return input(Object.assign({}, this.props.inputHtml, {
        valueLink: {
          value: this.props.valueLink.value,
          requestChange: this._onTimeChange,
        },
		className: cx(this.props.inputHtml.className, "form-control"),
      })
    )
  }

  _onTimeChange(newTime) {
    console.log(`New Time ${newTime}`)
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
    )
  }

}
