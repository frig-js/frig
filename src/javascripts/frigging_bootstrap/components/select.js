var React                         = require("react")
var {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
var {div, select, option}  = React.DOM
var cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Select"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      key: "input",
      className: "form-control",
      valueLink: this.props.valueLink,
    })
  }

  _selectOption(o) {
    let attrs = {
      key: `option-${o.label}`,
      value: o.value,
    }
    return option(attrs, o.label)
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props, {className: ""}),
        div({className: "controls"},
          select(this._inputHtml,
            this.props.options.map(this._selectOption)
          ),
          errorList(this.props.errors),
        )
      )
    )
  }

}
