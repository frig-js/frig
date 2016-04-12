import React from 'react'

export default class FormErrorList extends React.Component {
  static defaultProps = {
    // This is the property of `errors` where Frig will look for form-level errors.
    // Set to 'base' by default, for compatibility with Active Record.
    name: 'base',
  }

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      errors: React.PropTypes.object.isRequired,
    }).isRequired,
  }

  static propTypes = {
    name: React.PropTypes.string,
  }

  displayName = 'Frig.FormErrorList'

  _errorsArray() {
    const { errors } = this.context.frigForm
    const { name } = this.props
    return errors[name] || []
  }

  render() {
    let ThemedErrorList = this.context.frigForm.theme.FormErrorList
    return <ThemedErrorList errors={this._errorsArray()} />
  }
}
