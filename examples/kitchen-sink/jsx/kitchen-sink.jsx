'use strict'
// require("babel-core/polyfill")
// require("font-awesome-webpack")
require("frig").defaultTheme(require("frigging-bootstrap"))

let React = require("react/addons")
let Frig = require("frig").Form

let AccountForm = React.createClass({
  mixins: [
    React.addons.LinkedStateMixin
  ],

  getInitialState: function() {
    return {
      account: {
        email: "me@test.com",
        password: "test",
        shareSketchyInfo: false,
      }
    }
  },

  formContent: function(f) {
    return <div>
      <div className="row">
        <div className="sm-col-12">
          <h2>My Account</h2>
        </div>
      </div>

      <f.input name="email"/>
      <f.input name="password"/>
      <f.input name="passwordConfirmation"/>

      <div className="row">
        <div className="sm-col-12">
          <h3>Additional Sketchy Info</h3>
        </div>
      </div>

      <f.input name="shareSketchyInfo"/>

      <div className={this.state.account.shareSketchyInfo ? "show" : "hide"}>
        <f.input name="socialSecurityNumber"/>
        <f.input name="fullName"/>
      </div>

      <f.submit title="Save"/>
    </div>
  },

  render: function() {
    return <Frig
      data={this.linkState("account")}
      form={this.formContent}
    />
  }
})

document.addEventListener("DOMContentLoaded", function() {
  var domElement = document.getElementById('example')
  React.render(<AccountForm/>, domElement)
})
