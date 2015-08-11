let React = require("react")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, textarea} = React.DOM
let cx = require("classnames")

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Text"

  static defaultProps = Object.assign(require("../default_props.js"))

  constructor(props) {
    super(props)

    this.state = {
      errors: undefined,
      edited: false,
    }
  }

  _inputHtml() {
  	return Object.assign({}, this.props.inputHtml, {
  		className: `${this.props.className || ""} form-control`.trim(),
  		valueLink: this.props.valueLink,
  	})
  }

  _cx() {
    return cx({
      "form-group": true,
      "has-error": this.state.errors != null,
      "has-success": this.state.edited && this.state.errors == null,
    })
  }

  _errorList() {
    if (this.state.errors == null) return ""
    return errorList(this.state.errors)
  }

  _label() {
    if (this.props.label == null) return ""
    return label(this.props.labelHtml, this.props.label)
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: this._cx()},
        this._label(),
        div({className: "controls"},
          textarea(this._inputHtml()),
        ),
        this._errorList(),
      ),
    )
  }
  
}
