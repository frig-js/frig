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

  componentWillMount() {
    this.context.frigForm.childComponentWillMount(this.props.name, this)
  }

  componentWillUnmount() {
    this.context.frigForm.childComponentWillUnmount(this.props.name, this)
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

  _contextAtIndex(index, keys) {
    return keys.reduce( (contextAtIndex, key) => {
      const values = this.context.frigForm[key]
      contextAtIndex[key] = Array.isArray(values) ? values[index] : values
      return contextAtIndex
    }, {})
  }

  _formProps({data, index}) {
    const {errors, saved} = this._contextAtIndex(index, [
      "errors",
      "saved",
    ])
    const onChange = this._onChange.bind(
      this,
      index,
    )
    return {
      ...this.context.frigForm,
      index,
      key: index,
      ref: index,
      name: this.props.name,
      errors,
      saved,
      data,
      onChange,
    }
  }

  _onChange(index, nextFormData) {
    const data = this.context.frigForm.data[this.props.name]
    let nextData
    if (Array.isArray(data)) {
      nextData = [...data]
      nextData[index] = nextFormData
    }
    else {
      nextData = nextFormData
    }
    // Relaying the request change to the upstream data
    this.context.frigForm.requestChildComponentChange(this.props.name, nextData)
  }

  _nestedFormDatas(nextContext = this.context) {
    let dataValues = nextContext.frigForm.data[this.props.name] || []
    return Array.isArray(dataValues) ? dataValues : [dataValues]
  }

  render() {
    let i = 0
    let nestedFormDatas = this._nestedFormDatas()
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
