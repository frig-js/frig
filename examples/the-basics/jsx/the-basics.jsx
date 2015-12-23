require("frig").defaultTheme(require("frigging-bootstrap"))

var React = require("react/addons")
var LinkedStateMixin = require("react-addons-linked-state-mixin")
var Frig = require("frig").Form

var SignIn = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {}
  },

  form: function(f) {
    return <div className="row">
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

window.addEventListener('load', function() {
  var el = document.getElementById('the-basics-example')
  React.render(<SignIn/>, el)
})
