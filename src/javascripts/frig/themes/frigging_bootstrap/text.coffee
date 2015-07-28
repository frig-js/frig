React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.js"
frigHelpers                   = require "../../helpers.js"
InputMixin                    = require "../../mixins/input_mixin.js"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, label, textarea}        = React.DOM
cx = React.addons.classSet

friggingBootstrap.Text = React.createClass({

  displayName: 'Frig.friggingBootstrap.Text',

  mixins: [InputMixin],

  getInitialState: function () {
    return {
      errors: undefined,
      edited: false,
    }
  },

  getFriggingProps: function {
    return {
      inputHtml: {
        className: "form-control",
        placeholder: function {return this.frigProps.placeholder},
        defaultValue: function {return this.frigProps.initialValue},
        rows: 3,
      },
      labelHtml: {
        className: "control-label",
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

  _errorList: function() {
    return "" if (this.state.errors == undefined)
    return errorList(this.state.errors)
  },

  _label: function() {
    return "" if this.frigProps.label == undefined
    return label(this.frigProps.labelHtml, this.frigProps.label)
  },

  render: function() {
    return div({className: cx(sizeClassNames @frigProps)},
      div({className: @_cx()},
        @_label(),
        div({className: "controls"},
          textarea @frigProps.inputHtml,
        ),
        @_errorList(),
      ),
    )
  },

})