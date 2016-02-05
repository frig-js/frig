// One time theme setup (put this in an initialization file and call it once)
import Frig from "frig"
import FriggingBootstrap from "frigging-bootstrap"
Frig.defaultTheme(FriggingBootstrap)
// Libraries needed for each component
import React from "react"
import ReactDOM from "react-dom"
import {Form, Input, Submit} from "frig"

class TwoWayDataBindingExample extends React.Component {
  displayName = "TwoWayDataBindingExample"
  state = {account: {}}

  render() {
    return (
      <div>
        <Form
          data={this.state.account}
          onChange={(account) => this.setState({account})}
        >
          <div className="row">
            <Input name="email"/>
            <Input name="password"/>
            <Input name="rememberMe" type="switch"/>
            <Submit title="Sign In"/>
          </div>
        </Form>
        <h3>State:</h3>
        <pre>{JSON.stringify(this.state.account)}</pre>
      </div>
    )
  }

}

window.addEventListener('load', function() {
  var el = document.getElementById('two-way-data-binding-example')
  ReactDOM.render(<TwoWayDataBindingExample/>, el)
})
