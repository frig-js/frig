import React from "react"

export default class FormErrorList extends React.Component {
  displayName = "Frig.FormErrorList"

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      theme: React.PropTypes.object.isRequired,
    }).isRequired,
  }
  render() {
    let ThemedErrorList = this.context.frigForm.theme.FormErrorList
    return <ThemedErrorList {...this.props}/>
  }
}
