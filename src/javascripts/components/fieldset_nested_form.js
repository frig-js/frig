import React from "react"
import Form from "./form.js"

// Nested forms (forms inside nested fieldsets)
export default class FieldsetNestedForm extends Form {
  displayName = "Frig.FieldsetNestedForm"

  static childContextTypes = {
    frigFieldset: React.PropTypes.object,
  }

  getChildContext() {
    return {
      frigFieldset: {
        index: this.props.index,
      },
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
