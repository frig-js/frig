import React from "react"
import ErrorsNormalizer from "../higher_order_components/errors_normalizer.js"
import AbstractForm from "./abstract_form.js"

/*
 * A JSX-compatible React DOM Component.
 * Form should be used as the top level component above any other frig
 * components.
 */
@ErrorsNormalizer({
  as: Object,
  publicFunctions: [
    "validate",
    "isValid",
    "isModified",
    "modifications",
    "resetModified",
    "reset",
    "formData",
  ],
})
export default class Form extends AbstractForm {
  displayName = "Form"

  static propTypes = {
    data: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object.isRequired,
    saved: React.PropTypes.object.isRequired,
    theme: React.PropTypes.object.isRequired,
    typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
    layout: React.PropTypes.string.isRequired,
    align: React.PropTypes.string.isRequired,
    // Callbacks
    onSubmit: React.PropTypes.func,
  }

  static defaultProps = {
    data: {},
    errors: [],
    saved: {},
    theme: undefined,
    typeMapping: {},
    layout: "vertical",
    align: "left",
    onSubmit() {},
  }

  static childContextTypes = AbstractForm.childContextTypes

  render() {
    const ThemedForm = this.props.theme.component("form")
    return (
      <ThemedForm {...this._themedFormProps()}
        ref="form"
      >
        {this.props.children}
      </ThemedForm>
    )
  }

}
