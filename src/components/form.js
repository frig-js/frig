import React from 'react'
import AbstractForm from './abstract_form.js'

/*
 * A JSX-compatible React DOM Component.
 * Form should be used as the top level component above any other frig
 * components.
 */
export default class Form extends AbstractForm {
  displayName = 'Form'

  componentWillMount() {
    if (!this.props.data) {
      throw new Error(`<Form data={} /> must always be defined, got: ${this.props.data}`)
    }
    if (!this.props.onChange) {
      throw new Error(`<Form onChange={} /> must always be defined, got: ${this.props.onChange}`)
    }
  }

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
    errors: {},
    saved: {},
    theme: undefined,
    typeMapping: {},
    layout: 'vertical',
    align: 'left',
    onSubmit() {},
  }

  static childContextTypes = AbstractForm.childContextTypes

  render() {
    const ThemedForm = this.props.theme.Form
    return (
      <ThemedForm
        {...this._themedFormProps()}
        ref="form"
      >
        {this.props.children}
      </ThemedForm>
    )
  }

}
