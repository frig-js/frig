import React from "react"
import ErrorsNormalizer from "../higher_order_components/errors_normalizer.js"

/*
 * A JSX-compatible React DOM Component.
 * FrigForm should be used as the top level component for Frig forms in JSX.
 * In coffeescript FrigForm is called by FrigDSL.
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
  ],
})
export default class Form extends React.Component {
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
    errors: [],
    saved: {},
    theme: undefined,
    typeMapping: {},
    layout: "vertical",
    align: "left",
    onSubmit() {},
  }

  static childContextTypes = {
    frigForm: React.PropTypes.object,
  }

  getChildContext() {
    let {layout, theme, align, errors, saved} = this.props
    return {
      frigForm: {
        theme,
        layout,
        align,
        errors,
        saved,
        data: this._data(),
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
    let modifications = {}
    for (let k in this._childComponentsByName) {
      let c = this._childComponentsByName[k]
      if(!c.isModified()) continue
      modifications[k] = c.modifications == null ? true : c.modifications()
    }
    return modifications
  }

  resetModified() {
    for (let c of this._childComponents()) c.resetModified()
  }

  reset() {
    for (let c of this._childComponents()) c.reset()
  }

  /*
   * =========================================================================
   * React Lifecycle + Render
   * =========================================================================
   */

  render() {
    let ThemedForm = this.props.theme.component("form")
    return (
      <ThemedForm {...this._themedFormProps()}>
        {this.props.children}
      </ThemedForm>
    )
  }

  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _themedFormProps() {
    let formProps = Object.assign({}, this.props)
    formProps.formHtml = Object.assign({}, formProps.formHtml || {}, {
      ref: "form",
      onSubmit: this._onSubmit.bind(this),
    })
    return formProps
  }

  _data() {
    return this.props.data
  }

  childComponentWillMount = (name, component) => {
    this._childComponentsByName[name] = component
  }

  childComponentWillUnmount = (name) => {
    delete this._childComponentsByName[name]
  }

  _childComponents() {
    let list = []
    let componentsByName = this._childComponentsByName
    for (let k in componentsByName) list.push(componentsByName[k])
    return list
  }

  _onChildRequestChange = (k, v) => {
    // Update the onChange listener with a copy of the existing data merged with
    // this new input value
    this.props.onChange(Object.assign({}, this._data(), {[k]: v}))
  }

  _onSubmit = (e) => {
    if (!this.validate()) return e.preventDefault()
    this.props.onSubmit(e)
  }

}
