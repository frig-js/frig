import React from "react"
import AbstractForm from "./abstract_form.js"

// Nested forms (forms inside nested fieldsets)
export default class FieldsetNestedForm extends AbstractForm {
  displayName = "Frig.FieldsetNestedForm"

  static propTypes = AbstractForm.propTypes
  static defaultProps = AbstractForm.defaultProps

  static childContextTypes = {
    ...AbstractForm.childContextTypes,
    frigFieldset: React.PropTypes.object,
  }

  getChildContext() {
    return {
      ...super.getChildContext(),
      frigFieldset: {
        index: this.props.index,
      },
    }
  }


  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
