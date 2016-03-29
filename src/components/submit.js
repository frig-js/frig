import React from "react"

export default class Submit extends React.Component {
  displayName = "Frig.Submit"

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      theme: React.PropTypes.object.isRequired,
    }).isRequired,
  }

  render() {
    let ThemedSubmit = this.context.frigForm.theme.Submit
    return <ThemedSubmit {...this.props}/>
  }
}
