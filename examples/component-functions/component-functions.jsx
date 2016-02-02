// One time theme setup (put this in an initialization file and call it once)
import Frig from "frig"
import FriggingBootstrap from "frigging-bootstrap"
Frig.defaultTheme(FriggingBootstrap)
// Libraries needed for each component
import React from "react"
import ReactDOM from "react-dom"
import {Form, Input} from "frig"

// Example useage of the Form#reset() and Form#validate() functions.
class ComponentFunctionsExample extends React.Component {
  displayName = "ComponentFunctionsExample"

  componentWillMount() {
    this._interval = setInterval(this._updateCounter, 1000)
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  getInitialState() {
    return {account: {counter: 0, formUpdates: 0}}
  }

  // Non-form updates
  _updateCounter() {
    this.state.account.counter += 1
    this.setState({account: this.state.account})
  }

  componentWillUpdate() {
    var form = this.refs.form
    if (form != null && form.isModified() && form.isValid()) {
      form.resetModified()
      this.state.account.formUpdates += 1
      this.setState({account: this.state.account})
    }
  }

  _onResetClick = () => {
    this.refs.form.reset()
  }

  _onValidateClick = () => {
    this.refs.form.validate()
  }

  render() {
    return (
      <Form
        data={this.state.account}
        onChange={(data) => this.setState({account: data})}
        form={this.form}
        ref="form"
      >
        <div className="row">
          <h1 className="col-xs-12">Component Functions</h1>
          <Input name="counter"/>
          <Input name="formUpdates"/>
          <Input name="email"/>
          <Input name="password"/>
          <Input name="rememberMe" type="switch"/>
          <div className="col-xs-12">
            <div className="btn btn-danger" onClick={this._onResetClick}>
              form.reset()
            </div>
            {" "}
            <div className="btn btn-success" onClick={this._onValidateClick}>
              form.validate()
            </div>
          </div>
        </div>
      </Form>
    )
  }
}

window.addEventListener('load', function() {
  var el = document.getElementById('component-functions')
  ReactDOM.render(<ComponentFunctionsExample/>, el)
})
