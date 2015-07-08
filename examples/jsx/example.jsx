'use strict'

require("../../node_modules/bootstrap/dist/css/bootstrap.css")
var React         = require("react/addons")
var Frig          = require("frig")

var AccountForm = React.createClass({
  mixins: [
    Frig.Mixin,
    React.addons.LinkedStateMixin
  ],

  getInitialState: function() {
    console.log("initial state???")
    return {
      account: {
        email: "me@test.com",
        password: "test",
        shareSketchyInfo: false
      }
    }
  },

  formContent: function(f) {
    console.log("FORM CONTENT");
    return <div className="container">
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
    console.log("RENDER");
    // return this.frig({
    //   content: this.formContent,
    //   data: this.linkState("account")
    // })
    return <this.frig
      content={this.formContent}
      data={this.linkState("account")}
    />
  }
})

document.addEventListener("DOMContentLoaded", function() {
  var domElement = document.getElementById('example')
  React.render(<AccountForm/>, domElement)
})
