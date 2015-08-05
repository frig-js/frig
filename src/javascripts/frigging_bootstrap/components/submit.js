var React                         = require("react/addons")
var friggingBootstrap             = require("../index.js")
var InputMixin                    = require("frig/components/input_mixin")
var {div, input}                  = React.DOM
var {sizeClassNames}              = friggingBootstrap
var cx = React.addons.classSet

module.exports = React.createClass({

  displayName: "Frig.friggingBootstrap.Submit",

  mixins: [InputMixin],

  getFriggingProps: function () {
    return {
      inputHtml: {
        className:    this.frigProps.className || "btn btn-default",
        placeholder:  () => this.frigProps.placeholder,
        type:         () => this.frigProps.htmlInputType,
        defaultValue: () => this.frigProps.initialValue,
      },
    }
  },

  render: function () {
    return div({className: cx(sizeClassNames(this.frigProps))},
      div({className: "form-group"},
        input(this.frigProps.inputHtml),
      ),
    )
  },

})
