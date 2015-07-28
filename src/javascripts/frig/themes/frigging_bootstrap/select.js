React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.js"
frigHelpers                   = require "../../helpers.js"
InputMixin                    = require "../../mixins/input_mixin.js"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, label, select, option}  = React.DOM
cx = React.addons.classSet

friggingBootstrap.Select = React.createClass({

  displayName: 'Frig.friggingBootstrap.Select',

  mixins: [InputMixin],

  getInitialState: function() {
    {
      errors: undefined,
      edited: false,
    }
  },

  getFriggingProps: function() {
    return {
      inputHtml: {
        className: "form-control",
        defaultValue: () => {return this.frigProps.initialValue},
      },
      labelHtml: {
        className: "",
      },
    }
  },

  _cx: function() {
    return cx({
      "form-group": true
      "has-error": this.state.errors != undefined,
      "has-success": this.state.edited && this.state.errors == undefined,
    })
  },

  _selectOption: function (opts) {
    var opts = this.normalizeFriggingOption(opts)
    return option({value: opts.value, opts.label})
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
    return div({className: cx(sizeClassNames this.frigProps)},
      div({className: this._cx()},
        this._label(),
        div({className: "controls"},
          select(this.frigProps.inputHtml,
            map(this.frigProps.options, this._selectOption)
          ),
        this._errorList(),
      )
    )
  },

})