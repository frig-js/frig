var React = require("react")
var {div, button} = React.DOM
var {sizeClassNames} = require("../util.js")
var cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Submit"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, "btn btn-default"),
      type: "submit",
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: "form-group"},
        button(this._inputHtml(), this.props.title),
      ),
    )
  }

}
