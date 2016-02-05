// One time theme setup (put this in an initialization file and call it once)
import Frig from "frig"
import FriggingBootstrap from "frigging-bootstrap"
Frig.defaultTheme(FriggingBootstrap)
Frig.typeMapping.boolean = {component: "switch"}
// Libraries needed for each component
import React from "react"
import ReactDOM from "react-dom"
import {Form, Input, Submit, FormErrorList} from "frig"

class HorizontalLoginExample extends React.Component {
  displayName = "HorizontalLoginExample"

  state = {}

  columnClasses = "col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-12"

  render() {
    return (
      <div className="row">
        <div className={this.columnClasses}>
          <Form
            data={this.state}
            onChange={(data) => this.setState(data)}
            layout="horizontal"
            align="right"
          >
            <div className="row">
              <h2 className="col-xs-12">Sign In</h2>
              <FormErrorList/>
              <Input
                name="email"
                block
                autoFocus
                inputHtml={{autoComplete: "off"}}
              />
              <Input
                name="password"
                block
                inputHtml={{autoComplete: "off"}}
              />
              <Input
                name="turbo_mode"
                labelWidth={{xs: 6}}
                type="boolean"
              />
              <Submit
                title="Let's do this!"
                bsStyle="primary"
                bsSize="lg"
                block
              />
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

window.addEventListener("load", function() {
  let el = document.getElementById("horizontal-login")
  ReactDOM.render(<HorizontalLoginExample/>, el)
})
