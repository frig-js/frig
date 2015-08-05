var React                         = require("react/addons")
var friggingBootstrap             = require("../index.js")
var InputMixin                    = require("frig/components/input_mixin")
var {errorList, sizeClassNames}   = friggingBootstrap
var {div, label, input}           = React.DOM
var cx = React.addons.classSet

module.exports = React.createClass({

  displayName: "Frig.friggingBootstrap.Input",

  mixins: [InputMixin],

  getInitialState: function () {
    return {
      errors: undefined,
      edited: false,
    }
  },

  getFriggingProps: function () {
    return {
      // Bootstrap input addon texts
      prefix:          undefined,
      suffix:          undefined,

      inputHtml: {
        className:    "form-control",
        placeholder:  () => this.frigProps.placeholder,
        type:         () => this.frigProps.htmlInputType,
        defaultValue: () => this.frigProps.initialValue,
      },
    }
  },

  _cx: function () {
    return cx({
      "form-group": true,
      "has-error": this.state.errors != null,
      "has-success": this.state.edited && this.state.errors == null,
    })
  },

  _input: function () {
    return input(this.frigProps.inputHtml)
  },

  _inputPrefix: function() {
    if (this.frigProps.prefix == null) return ""
    return div({className: "input-group-addon"}, this.frigProps.prefix)
  },

  _inputSuffix: function() {
    if (this.frigProps.suffix == null) return ""
    div({className: "input-group-addon"}, this.frigProps.suffix)
  },

  _inputGroup: function() {
    if (this.frigProps.prefix || this.frigProps.suffix) {
      return div({className: "input-group"},
        this._inputPrefix(),
        this._input(),
        this._inputSuffix(),
      )
    }
    else {
      return this._input()
    }
  },

  _errorList: function() {
    if (this.state.errors == null) return ""
    return errorList(this.state.errors)
  },

  _label: function() {
    if (this.frigProps.label == null) return ""
    return label(this.frigProps.labelHtml, this.frigProps.label)
  },

  render: function () {
    return div({className: cx(sizeClassNames(this.frigProps))},
      div({className: this._cx()},
        this._label(),
        div({className: "controls"},
          this._inputGroup(),
        ),
        this._errorList(),
      ),
    )
  },

})
