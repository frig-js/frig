let React = require("react")
let {div} = React.DOM

export default class NestedFieldset extends React.Component {
  static propTypes = {
    form: React.PropTypes.func.isRequired,
    // Provided by the parent Frig Form's HOC props closure
    data: React.PropTypes.object.isRequired,
    theme: React.PropTypes.object.isRequired,
    typeMapping: React.PropTypes.objectOf(React.PropTypes.string),
    onChange: React.PropTypes.func.isRequired,
  }

  _renderForm(instanceProps) {
    let component = require("frig/components/form")
    instanceProps = Object.assign({}, this.props, instanceProps, {
      form: (f) => this.props.form(f, instanceProps.key),
      nestedForm: true,
    })
    return React.createElement(component, instanceProps)
  }

  render() {
    let i = 0
    let datas = this.props.data
    datas = Array.isArray(datas) ? datas : [datas]
    return div({},
      datas.map((data) => this._renderForm({data, key: i++}))
    )
  }

}
