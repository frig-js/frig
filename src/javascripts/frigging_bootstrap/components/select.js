var React                         = require("react/addons")
var friggingBootstrap             = require("../index.js")
var InputMixin                    = require("frig/components/input_mixin")
var {map}                         = require("frig/helpers")
var {errorList, sizeClassNames}   = friggingBootstrap
var {div, label, select, option}  = React.DOM
var cx = React.addons.classSet

module.exports = React.createClass({

  displayName: "Frig.friggingBootstrap.Select",

  mixins: [InputMixin],

  getInitialState: function() {
    return {
      errors: undefined,
      edited: false,
    }
  },

  getFriggingProps: function() {
    return {
      inputHtml: {
        className: "form-control",
        defaultValue: () => this.frigProps.initialValue,
      },
      labelHtml: {
        className: "",
      },
    }
  },

  _cx: function() {
    return cx({
      "form-group": true,
      "has-error": this.state.errors != null,
      "has-success": this.state.edited && this.state.errors == null,
    })
  },

  _selectOption: function (opts) {
    opts = this.normalizeFriggingOption(opts)
    return option({value: opts.value}, opts.label)
  },

  _errorList: function() {
    if (this.state.errors == null) return ""
    return errorList(this.state.errors)
  },

  _label: function() {
    if (this.frigProps.label == null) return ""
    return label(this.frigProps.labelHtml, this.frigProps.label)
  },

  render: function() {
    return div({className: cx(sizeClassNames(this.frigProps))},
      div({className: this._cx()},
        this._label(),
        div({className: "controls"},
          select(this.frigProps.inputHtml,
            map(this.frigProps.options, this._selectOption)
          ),
          this._errorList(),
        )
      )
    )
  },

})
