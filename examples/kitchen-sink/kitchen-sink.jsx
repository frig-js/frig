// One time theme setup (put this in an initialization file and call it once)
import Frig from "frig"
import FriggingBootstrap from "frigging-bootstrap"
Frig.defaultTheme(FriggingBootstrap)
Frig.typeMapping.boolean = {component: "switch"}
// Libraries needed for each component
import React from "react"
import ReactDOM from "react-dom"
import {Form, Input, Submit, FormErrorList, Fieldset, FieldsetText} from "frig"

class KitchenSinkExample extends React.Component {
  displayName = "KitchenSinkExample"
  state = {
    account: {
      email: "me@test.com",
      cost: "12.245",
      password: "test",
      shareSketchyInfo: false,
      addresses: [{address: "55 Actual Place Rd."}, {}],
      select_example: "thing-value",
      colorTwo: "#999",
      colorThree: "#000",
    },
  }

  onSubmit(e) {
    e.preventDefault()
  }

  formOpts() {
    return {
      data: this.state.account,
      onChange: (account) => this.setState({account}),
      errors: {
        base: ["Test Error", "Moo"],
        email: ["This Error is a Test"],
        addresses: [{address: "This is a Nested Field Error Test"}],
      },
      saved: {
        select_example: true,
        time_of_day: true,
        colorTwo: true,
        addresses: [{address: true}, {}],
      },
      // errors: ["Test Error", "Moo"]
      onSubmit: this.onSubmit,
      // layout: "horizontal"
    }
  }

  customSelections() {
    return this.state.account.customSelectionRendering || []
  }

  render() {
    return (
      <Form {...this.formOpts()}>
        <div>
          <div className="row">
            <div className="col-xs-12">
              <h2>The Frigging Kitchen Sink</h2>
            </div>
          </div>

          <div className="row">
            <FormErrorList/>
          </div>

          <div className="row">
            <Input
              name="InputWithoutALabel"
              xs={12}
              label={false}
              placeholder="Input Without a Label"
            />
            <Input
              name="price"
              type="float"
              format="0,0.00"
              xs={12}
              min={0}
              placeholder="0.00"
            />
            <Input
              name="cost"
              type="float"
            />
            <Input
              name="email"
            />
            <Input
              name="select_example"
              options={[
                // The 3 formats for options
                // 1. An object with a label and a value (perfered)
                {label: "Stuff", value: "stuff-value"},
                // 2. An array of the [value, label]
                ["thing-value", "Things"],
                // 3. A string. For scenarios where the label equals the value.
                "why not both?",
              ]}
            />
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h2>Passwords</h2>
            </div>
            <Input
              name="password"
              xs={6}
            />
            <Input
              name="passwordConfirmation"
              xs={6}
            />
          </div>
          <div className="row">
            <Input
              name="description"
              className="testing-class-name"
              type="text"
              rows={5}
              xs={12}
            />
            <Input
              name="description-two"
              className="testing-class-name"
              type="text"
              rows={5}
              label={false}
              placeholder="Description without a label"
              xs={12}
            />
          </div>
          <div className="row">
            <Input
              name="time_of_day"
              type="switch"
              xs={6}
              label="Time of Day"
              handleWidth={100}
              onText="Enabled"
              offText="Disabled"
              errors={["This error is an example", "As is this one"]}
            />
            <Input
              name="time_of_night"
              type="switch"
              xs={6}
              label={false}
            />
            <Input
              name="red_or_blue"
              type="switch"
              onText="Red"
              offText="Blue"
              onValue="red"
              offValue="blue"
            />
          </div>
          <div className="row">
            <Input
              name="uploadAvatar"
              type="file"
              xs={6}
              label="Uploading Avatar"
            />
            <Input
              name="uploadVirus"
              type="file"
              xs={6}
              label={false}
            />
          </div>
          <div className="row">
            <Input
              name="startTime"
              type="time"
              xs="12"
              placeholder="12:00pm"
              label="Start Time"
            />
            <Input
              name="endTime"
              type="time"
              xs="12"
              placeholder="End Time"
              label={false}
            />
          </div>
          <div className="row">
            <Input
              name="colorOne"
              type="color"
              xs="12"
              label="Color One"
            />
            <Input
              name="colorTwo"
              type="color"
              xs="12"
              label={false}
            />
            <Input
              name="colorThree"
              type="color"
              xs="12"
              label={false}
            />
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h3>Nested Fields (Eg. Has Many)</h3>
            </div>
            <Fieldset name="addresses">
              <div>
                <div className="col-xs-12">
                  <h4>
                    <FieldsetText
                      text={(index) => `Address #${index+1}`}
                    />
                  </h4>
                </div>
                <Input name="address"/>
                <Input name="city"/>
                <Input name="postal_code"/>
              </div>
            </Fieldset>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3>Additional Sketchy Info</h3>
            </div>
          </div>

          <div className="row">
            <Input name="shareSketchyInfo"/>
            {
              this.state.account.shareSketchyInfo === true ?
                [
                  <Input name="socialSecurityNumber" key="ssn"/>,
                  <Input name="fullName" key="fullName"/>,
                  <Input
                    name="eyeColor"
                    key ="eyeColor"
                    options={["blue", "green", "red", "left"]}
                  />,
                ]
              : null
            }
            <Submit title="Save"/>
          </div>
        </div>
      </Form>
    )
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var el = document.getElementById("kitchen-sink")
  ReactDOM.render(<KitchenSinkExample/>, el)
})
