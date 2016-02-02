import React from "react"

export default class FieldsetText extends React.Component {
  displayName = "Frig.FieldsetText"

  render() {
    let spanProps = Object.assign({}, this.props)
    delete spanProps.text
    return (
      <span {...spanProps}>
        {this.props.text(this.context.frigFieldset.index)}
      </span>
    )
  }
}
