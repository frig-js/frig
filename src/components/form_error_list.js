import React from "react"

export default class FormErrorList extends React.Component {
  displayName = "Frig.FormErrorList"

  static defaultProps = {
    // This is the property of `errors` where Frig will look for form-level errors.
    // Set to "base" by default, for compatibility with Active Record.
    name: "base",
  }

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      errors: React.PropTypes.object.isRequired,
    }).isRequired,
  }

  _errorsArray() {
    const { errors } = this.context.frigForm
    const { name } = this.props
    return errors.hasOwnProperty(name)
      ? errors.base
      : []
  }

  render() {
    const ThemedErrorList = this.context.frigForm.theme.component("errors")
    return <ThemedErrorList errors={this._errorsArray()} />
  }
}
