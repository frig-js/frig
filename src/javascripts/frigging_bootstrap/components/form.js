let React                         = require("react")
let {form}                        = React.DOM

export default class FriggingBootstrapForm extends React.Component {

  _formHtml() {
    let defaults = {
      className: this.props.layout ? `form-${this.frigProps.layout}` : "",
    }
    return Object.assign(defaults, this.props.formHtml)
  }

  render() {
    return form(this._formHtml(), this.props.children)
  }

}
