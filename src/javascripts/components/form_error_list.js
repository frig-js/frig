import React from "react"

export default class FormErrorList extends React.Component {
  displayName = "Frig.FormErrorList"

  render() {
    let themedErrorList = this.context.frigForm.theme.component("errors")
    return <themedErrorList {...this.props}/>
  }
}
