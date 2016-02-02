import React from "react"

export default class Submit extends React.Component {
  displayName = "Frig.Submit"

  render() {
    let themedSubmit = this.context.frigForm.theme.component("submit")
    return <themedSubmit {...this.props}/>
  }
}
