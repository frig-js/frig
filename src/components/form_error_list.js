import React from "react"

export default class FormErrorList extends React.Component {
  displayName = "Frig.FormErrorList"

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      errors: React.PropTypes.object.isRequired,
    }).isRequired,
  }

  _errorsArray() {
    const { errors } = this.context.frigForm
    return errors.hasOwnProperty("base")
      ? errors.base
      : []
  }

  render() {
    const ThemedErrorList = this.context.frigForm.theme.component("errors")
    return <ThemedErrorList errors={this._errorsArray()} />
  }
}
