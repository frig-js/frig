let React                         = require("react")
let {form}                        = React.DOM

export default class FriggingBootstrapForm extends React.Component {

  static defaultProps = {
    layout: require("../default_props.js").layout,
  }

  _formHtml() {
    let className = this.props.layout ? `form-${this.props.layout}` : ""
    return Object.assign({}, this.props.formHtml, {
      className: `${this.props.formHtml.className||""} ${className}`.trim(),
    })
  }

  render() {
    return form(this._formHtml(), this.props.children)
  }

}
