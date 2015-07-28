var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.js")
var InputMixin                    = require("../../mixins/input_mixin.js")
var {div, input}                  = React.DOM
var {sizeClassNames}              = friggingBootstrap
var cx = React.addons.classSet

friggingBootstrap.Submit = React.createClass

  displayName: 'Frig.friggingBootstrap.Submit',

  mixins: [InputMixin],

  getFriggingProps: function () {
    return {
      inputHtml: {
        className: @frigProps.className || "btn btn-default",
        placeholder: function {return this.frigProps.placeholder},
        type: function {return this.frigProps.htmlInputType},
        defaultValue: function {return this.frigProps.initialValue},
      },
    }
  },

  render: function () {
    div({className: cx(sizeClassNames @frigProps)},
      div({className: "form-group"},
        input(@frigProps.inputHtml),
      ),
    )
  },

}