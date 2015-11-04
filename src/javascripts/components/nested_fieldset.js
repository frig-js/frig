let React = require("react")
let {div} = React.DOM

export default class NestedFieldset extends React.Component {
  static propTypes = {
    form: React.PropTypes.func.isRequired,
    // Provided by the parent Frig Form's HOC props closure
    data: React.PropTypes.object.isRequired,
    theme: React.PropTypes.object.isRequired,
    typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
    errors: React.PropTypes.object,
    saved: React.PropTypes.object,
  }

  state = {
    invalidForms: [],
  }

  componentWillMount() {
    this.props.onComponentMount(this)
  }

  componentWillUnmount() {
    this.props.onComponentUnmount(this)
  }

  componentWillReceiveProps(nextProps) {
    // Truncating the invalid forms list to prevent ghosting of invalid
    // forms that are removed in the props.
    let invalidForms = this.state.invalidForms
    let numberOfForms = this._dataValues(nextProps).length
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
    return Array.isArray(this.props.data.value || []) ? values : values[0]
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

  _listForKey(list, key) {
    return Array.isArray(list) ? list[key] : list
  }

  _formProps({data, key}) {
    return Object.assign({}, this.props, {
      key,
      ref: key,
      form: (f) => this.props.form(f, key),
      nestedForm: true,
      errors: this._listForKey(this.props.errors, key),
      saved: this._listForKey(this.props.saved, key),
      internalErrors: this._listForKey(this.props.internalErrors, key),
      data: {
        value: data,
        requestChange: this._onFormRequestChange.bind(this, key),
      },
    })
  }

  _onFormRequestChange(key, formData, valid) {
    let data = this.props.data.value
    // Combine the updated data from the form with the other forms or if this
    // is a single form fieldset overwriting the previous form data.
    if (Array.isArray(data)) {
      data = data.slice()
      data[key] = formData
    }
    else {
      data = formData
    }
    // Combine this valid flag with the other nested form valid flags and relay
    // a valid state to the upstream only if all nested forms are valid
    let invalidForms = this.state.invalidForms
    if (valid) {
      invalidForms[key] = true
    }
    else {
      delete invalidForms[key]
    }
    valid = invalidForms.filter((invalid) => invalid === true).length === 0
    this.setState({invalidForms})
    // Relaying the request change to the upstream data
    this.props.data.requestChange(data, valid)
  }

  _dataValues(nextProps = this.props) {
    let dataValues = nextProps.data.value || []
    return Array.isArray(dataValues) ? dataValues : [dataValues]
  }

  _renderForm(formProps) {
    let component = require("./form.js")
    return React.createElement(component, formProps)
  }

  render() {
    let i = 0
    let datas = this._dataValues()
    return div({},
      datas.map((data) => this._renderForm(this._formProps({data, key: i++})))
    )
  }

}
