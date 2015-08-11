let React = require("react")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, textarea} = React.DOM
let cx = require("classnames")

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Text"

  static defaultProps = Object.assign(require("../default_props.js"))

  _inputHtml() {
  	return Object.assign({}, this.props.inputHtml, {
  		className: `${this.props.className || ""} form-control`.trim(),
  		valueLink: this.props.valueLink,
  	})
  }

  _cx() {
    return cx({
      "form-group": true,
      "has-error": this.props.errors != null,
      "has-success": this.props.modified && this.props.errors == null,
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: this._cx()},
        label(this.props),
        div({className: "controls"},
          textarea(this._inputHtml()),
        ),
        errorList(this.props.errors),
      ),
    )
  }
  
}
