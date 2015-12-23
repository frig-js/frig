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
    return <div>
      <Frig
        data={this.linkState("account")}
        form={this.form}
      />
      <h3>State:</h3>
      <pre>{JSON.stringify(this.state.account)}</pre>
    </div>
  }

})

window.addEventListener('load', function() {
  var el = document.getElementById('two-way-data-binding-example')
  React.render(<SignIn/>, el)
})
