var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.js")
var frigHelpers                   = require("../../helpers.js")
var InputMixin                    = require("../../mixins/input_mixin.js")
var {errorList, sizeClassNames}   = friggingBootstrap
var {humanize, clone, merge, map} = frigHelpers
var {div, label, input}           = React.DOM
var cx = React.addons.classSet

friggingBootstrap.Input = React.createClass({

  displayName: 'Frig.friggingBootstrap.Input',

  mixins: [InputMixin],

  getInitialState: function () {
    return {
      errors: undefined,
      edited: false,
    }
  },

  getFriggingProps: function {
    return {
      // Bootstrap input addon texts
      prefix:          undefined,
      suffix:          undefined,

      inputHtml: {
        className: "form-control",
        placeholder: function {return this.frigProps.placeholder},
        type: function {return this.frigProps.htmlInputType},
        defaultValue: function {return this.frigProps.initialValue},
      },
    }
  },

  _cx: function {
    return cx({
      "form-group": true
      "has-error": this.state.errors != undefined,
      "has-success": this.state.edited && this.state.errors == undefined,
    })
  },

  _input: function {
    return input(this.frigProps.inputHtml)
  },

  _inputPrefix: function() {
    if (this.frigProps.prefix == undefined) return ""
    return div({className: "input-group-addon"}, this.frigProps.prefix)
  },

  _inputSuffix: function() {
    if (this.frigProps.suffix == undefined) return ""
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
    return "" if (this.state.errors == undefined)
    return errorList(this.state.errors)
  },

  _label: function() {
    return "" if this.frigProps.label == undefined
    return label(this.frigProps.labelHtml, this.frigProps.label)
  },

  render: function {
    return div({className: cx(sizeClassNames this.frigProps)},
      div({className: this._cx()},
        this._label(),
        div({className: "controls"},
          this._inputGroup(),
        ),
        this._errorList(),
    },
  }

}
