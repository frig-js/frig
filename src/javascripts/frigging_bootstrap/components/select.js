var React                         = require("react")
var {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
var {div} = React.DOM
var select = require("frig/components/value_linked_select")
var cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Select"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      key: "input",
      className: "form-control",
      valueLink: this.props.valueLink,
      options: this.props.options,
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props, {className: ""}),
        div({className: "controls"},
          select(this._inputHtml),
          errorList(this.props.errors),
        )
      )
    )
  }

}
