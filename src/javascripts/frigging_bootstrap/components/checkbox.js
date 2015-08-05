var React                         = require("react/addons")
var friggingBootstrap             = require("../index.js")
var InputMixin                    = require("frig/components/input_mixin")
var {errorList, sizeClassNames}   = friggingBootstrap
var {div, label, input}           = React.DOM
var cx = React.addons.classSet

module.exports = React.createClass({

  displayName: "Frig.friggingBootstrap.Checkbox",

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
        type: "checkbox",
        value: this.frigProps.key,
        checked: () => this.frigProps.initialValue,
      },
    }
  },

  _cx: function() {
    return cx({
      "checkbox": true,
      "has-error": this.state.errors,
      "has-success": this.state.edited && this.state.errors == null,
    })
  },

  render: function() {
    return div({className: "form-group"},
      div({className: cx(sizeClassNames(this.frigProps))},
        div({className: this._cx()},
          label(this.frigProps.labelHtml,
            input(this.frigProps.inputHtml),
            this.frigProps.label ? ` ${this.frigProps.label}` : "",
          ),
          this.state.errors != null ? errorList(this.state.errors) : "",
        ),
      ),
    )
  },

})
