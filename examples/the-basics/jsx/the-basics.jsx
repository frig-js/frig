require("frig").defaultTheme(require("frigging-bootstrap"))

var React = require("react/addons")
var Frig = require("frig").Form

var SignIn = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {}
  },

  form: function(f) {
    return <div className="row">
      <h3 className="col-xs-12">Sign In</h3>
      <f.input name="email"/>
      <f.input name="password"/>
      <f.input name="rememberMe" type="switch"/>
      <f.submit title="Sign In"/>
    </div>
  },

  render: function() {
    return <Frig
      data={this.linkState("account")}
      form={this.form}
    />
  }
})

React.render(<SignIn/>, document.getElementById('example'))
