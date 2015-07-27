var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.coffee")
var InputMixin                    = require("../../mixins/input_mixin.coffee")
var {errorList, sizeClassNames}   = friggingBootstrap
var {div, label, input}           = React.DOM
var cx = React.addons.classSet

friggingBootstrap.Checkbox = React.createClass({

  displayName: 'Frig.friggingBootstrap.Checkbox',

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
        value: @frigProps.key,
        checked: () => {@frigProps.initialValue},
      },
    }
  },

  _cx: function() {
    cx({
      "checkbox": true,
      "has-error": @state.errors,
      "has-success": @state.edited && @state.errors == undefined,
    })
  },

  render: function() {
    div({className: "form-group"},
      div({className: cx(sizeClassNames @frigProps)},
        div({className: @_cx()},
          label(@frigProps.labelHtml,
            input(@frigProps.inputHtml),
            @frigProps.label ? ` ${@frigProps.label}` : "",
          ),
          @state.errors != undefined ? errorList(@state.errors) : "",
        ),
      ),
    )
  },

})