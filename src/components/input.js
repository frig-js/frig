import React from 'react'
import UnboundInput from './unbound_input.js'

export default class Input extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
    layout: React.PropTypes.string,
    align: React.PropTypes.string,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    multiple: React.PropTypes.bool,
    type: React.PropTypes.string,
    options: React.PropTypes.array,
    validate: React.PropTypes.bool,
    // Callbacks (Public API)
    onChange: React.PropTypes.func.isRequired,
    onValidChange: React.PropTypes.func.isRequired,
  }

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      data: React.PropTypes.object.isRequired,
      theme: React.PropTypes.object.isRequired,
      errors: React.PropTypes.object.isRequired,
      layout: React.PropTypes.string.isRequired,
      align: React.PropTypes.string.isRequired,
      saved: React.PropTypes.object.isRequired,
      // Callbacks (Private API - reserved for frig form use only)
      requestChildComponentChange: React.PropTypes.func.isRequired,
      childComponentWillMount: React.PropTypes.func.isRequired,
      childComponentWillUnmount: React.PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    validate: true,
    disabled: false,
    errors: [],
    onChange: () => {},
    onValidChange: () => {},
  }

  displayName = 'Frig.Input'

  /*
   * =========================================================================
   * React Lifecycle
   * =========================================================================
   */

  componentWillMount() {
    this.context.frigForm.childComponentWillMount(this.props.name, this)
  }

  componentWillUnmount() {
    this.context.frigForm.childComponentWillUnmount(this.props.name, this)
  }


  /*
   * =========================================================================
   * Public Functions
   * =========================================================================
   */

  validate() {
    return this.refs.unboundInput.validate()
  }

  isValid() {
    return this.refs.unboundInput.isValid()
  }

  isModified() {
    return this.refs.unboundInput.isModified()
  }

  resetModified() {
    return this.refs.unboundInput.resetModified()
  }

  reset() {
    return this.refs.unboundInput.reset()
  }


  /*
   * =========================================================================
   * Private functions
   * =========================================================================
   */

  _onChange = (val, valid) => {
    // Update the value link (used by Frig form components)
    this.context.frigForm.requestChildComponentChange(this.props.name, val)
    // Run the external callbacks (external API, not used by Frig internally)
    this.props.onChange(val, valid)
    if (valid) this.props.onValidChange(val, valid)
  }

  render() {
    return (
      <UnboundInput
        {...this.props}
        ref="unboundInput"
        errors={(this.props.errors || []).slice().concat(
          this.context.frigForm.errors[this.props.name] || []
        )}
        saved={this.context.frigForm.saved[this.props.name]}
        value={this.context.frigForm.data[this.props.name]}
        onChange={this._onChange}
      />
    )
  }

}
