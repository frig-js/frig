import FieldsetNestedForm from "./fieldset_nested_form.js"
import React from "react"

export default class Fieldset extends React.Component {
  displayName = "Fieldset"

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      data: React.PropTypes.object.isRequired,
      theme: React.PropTypes.object.isRequired,
      errors: React.PropTypes.object.isRequired,
      layout: React.PropTypes.string.isRequired,
      saved: React.PropTypes.object.isRequired,
      // Callbacks (Private API - reserved for frig form use only)
      requestChildComponentChange: React.PropTypes.func.isRequired,
      childComponentWillMount: React.PropTypes.func.isRequired,
      childComponentWillUnmount: React.PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    invalidForms: [],
  }

  componentWillMount() {
    this.context.frigForm.childComponentWillMount(this.props.name, this)
  }

  componentWillUnmount() {
    this.context.frigForm.childComponentWillUnmount(this.props.name, this)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // Truncating the invalid forms list to prevent ghosting of invalid
    // forms that are removed in the props.
    let invalidForms = this.state.invalidForms
    let numberOfForms = this._dataValues(nextContext).length
    invalidForms = invalidForms.slice(0, numberOfForms)
    this.setState({invalidForms})
  }

  validate() {
    this._forms().forEach((form) => form.validate())
    return this.isValid()
  }

  isValid() {
    return this._forms().every((form) => form.isValid())
  }

  isModified() {
    return this._forms().some((form) => form.isModified())
  }

  modifications() {
    let values = this._forms()
      .filter((form) => form.isModified())
      .map((form) => form.modifications())
    let isArray = Array.isArray(
      this.context.frigForm.data[this.props.name] || []
    )
    return isArray ? values : values[0]
  }

  resetModified() {
    this._forms().forEach((form) => form.resetModified())
  }

  reset() {
    this._forms().forEach((form) => form.reset())
  }

  _forms() {
    return Object.keys(this.refs||{}).map((k) => this.refs[k])
  }

  _listForKey(list, index) {
    return Array.isArray(list) ? list[index] : list
  }

  _formProps({data, index}) {
    return Object.assign({}, this.context.frigForm, {
      index,
      key: index,
      ref: index,
      errors: this._listForKey(this.props.errors, index),
      saved: this._listForKey(this.props.saved, index),
      internalErrors: this._listForKey(this.props.internalErrors, index),
      data: data,
      onChange: this._onFormRequestChange.bind(this, index),
    })
  }

  _onFormRequestChange(index, formData, valid) {
    let data = this.props.data.value
    // Combine the updated data from the form with the other forms or if this
    // is a single form fieldset overwriting the previous form data.
    if (Array.isArray(data)) {
      data = data.slice()
      data[index] = formData
    }
    else {
      data = formData
    }
    // Combine this valid flag with the other nested form valid flags and relay
    // a valid state to the upstream only if all nested forms are valid
    let invalidForms = this.state.invalidForms
    if (valid) {
      invalidForms[index] = true
    }
    else {
      delete invalidForms[index]
    }
    valid = invalidForms.filter((invalid) => invalid === true).length === 0
    this.setState({invalidForms})
    // Relaying the request change to the upstream data
    this.props.data.requestChange(data, valid)
  }

  _dataValues(nextContext = this.context) {
    let dataValues = nextContext.frigForm.data[this.props.name] || []
    return Array.isArray(dataValues) ? dataValues : [dataValues]
  }

  render() {
    let i = 0
    let nestedFormDatas = this._dataValues()
    return (
      <div>
        {
          nestedFormDatas.map((data) =>
            <FieldsetNestedForm {...this._formProps({data, index: i++})}>
              {this.props.children}
            </FieldsetNestedForm>
          )
        }
      </div>
    )
  }

}
