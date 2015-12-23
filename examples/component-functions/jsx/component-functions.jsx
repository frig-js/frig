require("frig").defaultTheme(require("frigging-bootstrap"))

var React = require("react/addons")
var LinkedStateMixin = require("react-addons-linked-state-mixin")
var Frig = require("frig").Form

var SignIn = React.createClass({

  mixins: [LinkedStateMixin],

  componentWillMount: function() {
    this._interval = setInterval(this._updateCounter, 1000)
  },

  componentWillUnmount: function() {
    clearInterval(this._interval)
  },

  getInitialState: function() {
    return {account: {counter: 0, formUpdates: 0}}
  },

  // Non-form updates
  _updateCounter: function() {
    this.state.account.counter += 1
    this.setState({account: this.state.account})
  },

  componentWillUpdate: function() {
    var form = this.refs.form
    if (form != null && form.isModified() && form.isValid()) {
      form.resetModified()
      this.state.account.formUpdates += 1
      this.setState({account: this.state.account})
    }
  },

  _onResetClick: function() {
    this.refs.form.reset()
  },

  _onValidateClick: function() {
    this.refs.form.validate()
  },

  form: function(f) {
    return <div className="row">
      <h1 className="col-xs-12">Component Functions</h1>
      <f.input name="counter"/>
      <f.input name="formUpdates"/>
      <f.input name="email"/>
      <f.input name="password"/>
      <f.input name="rememberMe" type="switch"/>
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
  },

  render: function() {
    return <Frig
      data={this.linkState("account")}
      form={this.form}
      ref="form"
    />
  }
})

window.addEventListener('load', function() {
  var el = document.getElementById('component-functions')
  React.render(<SignIn/>, el)
})
