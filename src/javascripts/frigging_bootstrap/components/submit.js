var React                         = require("react/addons")
var {div, input}                  = React.DOM
var {sizeClassNames}              = require("../util.js")
var cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Submit"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: `${this.props.className || ""} btn btn-default`.trim(),
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: "form-group"},
        input(this._inputHtml()),
      ),
    )
  }

}
