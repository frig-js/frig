import React from 'react'

export default class AbstractForm extends React.Component {
  static childContextTypes = {
    frigForm: React.PropTypes.object,
  }
  static propTypes = {
    align: React.PropTypes.string.isRequired,
    layout: React.PropTypes.string.isRequired,
    theme: React.PropTypes.object.isRequired,
    errors: React.PropTypes.object.isRequired,
    saved: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func,
  }

  getChildContext() {
    const { align, layout, theme, errors, saved, data } = this.props
    return {
      frigForm: {
        align,
        layout,
        theme,
        errors,
        saved,
        data,
        requestChildComponentChange: this._onChildRequestChange,
        childComponentWillMount: this.childComponentWillMount,
        childComponentWillUnmount: this.childComponentWillUnmount,
        submit: this._onSubmit,
      },
    }
  }

  _childComponentsByName = []

  /*
   * =========================================================================
   * Public Functions
   * =========================================================================
   */

  validate() {
    return this._childComponents().filter((c) => !c.validate()).length === 0
  }

  isValid() {
    return this._childComponents().filter((c) => !c.isValid()).length === 0
  }

  isModified() {
    return this._childComponents().filter((c) => c.isModified()).length !== 0
  }

  modifications() {
    const modifications = {}
    for (const k in this._childComponentsByName) { // eslint-disable-line guard-for-in
      const c = this._childComponentsByName[k]
      if (!c.isModified()) continue
      modifications[k] = c.modifications == null ? true : c.modifications()
    }
    return modifications
  }

  resetModified() {
    for (const c of this._childComponents()) c.resetModified()
  }

  reset() {
    for (const c of this._childComponents()) c.reset()
  }

  formData() {
    return this.refs.form.formData()
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _themedFormProps() {
    const formProps = Object.assign({}, this.props)
    formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
      onSubmit: this._onSubmit.bind(this),
    })
    return formProps
  }

  childComponentWillMount = (name, component) => {
    this._childComponentsByName[name] = component
  }

  childComponentWillUnmount = (name) => {
    delete this._childComponentsByName[name]
  }

  _childComponents() {
    const componentsByName = this._childComponentsByName
    return Object.keys(componentsByName).map((k) => componentsByName[k])
  }

  _onChildRequestChange = (k, v) => {
    // Update the onChange listener with a copy of the existing data merged with
    // this new input value
    this.props.onChange(Object.assign({}, this.props.data, { [k]: v }))
  }

  _onSubmit = (e) => {
    if (!this.validate()) return e.preventDefault()
    return this.props.onSubmit(e)
  }

}
