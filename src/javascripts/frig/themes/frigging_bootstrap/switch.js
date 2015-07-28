var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.js")
var frigHelpers                   = require("../../helpers.js")
var InputMixin                    = require("../../mixins/input_mixin.js")
var {errorList, sizeClassNames}   = friggingBootstrap
var {humanize, clone, merge, map} = frigHelpers
var {div, span, input, label}     = React.DOM
var cx = React.addons.classSet

/*
 * Example 1) Using a switch for one input:
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex1", data: data ->
 *     f.input "allIsWell", template: "switch"

 * Example 2) Using switches as the default for all boolean inputs in a form:
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex2", data: data, typeMapping: {boolean: "switch"}, ->
 *     f.input "allisWell"

 * Example 3) Using switches as the default for all boolean inputs in all forms:
 *
 *   Frig.typeMapping.boolean.template = "switch"
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex2", data: data, ->
 *     f.input "allisWell"

 * This optional add-on component depends on BootstrapSwitch and jQuery
 */
friggingBootstrap.Switch = React.createClass({

  displayName: 'Frig.friggingBootstrap.Switch',

  mixins: [InputMixin],

  getFriggingProps: function() {
    return {
      handleWidth:     undefined,
      inputHtml: {
        className:     "switch",
        type:          "checkbox",
      },
      offColor:        undefined,
      offText:         undefined,
      offValue:        false,
      onColor:         "success",
      onText:          undefined,
      onValue:         true,
    }
  },

  componentDidMount: function() {
    // get initial state (boolean) by checking whether the initialValue
    // is the same as the onValue/offValue (-> true/false) of the switch
    this._$el().bootstrapSwitch({
      disabled: this.frigProps.disabled,
      handleWidth: this.frigProps.handleWidth,
      offColor: this.frigProps.offColor,
      offText: this.frigProps.offText,
      onColor: this.frigProps.onColor,
      onText: this.frigProps.onText,
      size: "small",
      state: this._getBooleanVal(),
      onSwitchChange: this._onSwitchChange,
    })

  _getBooleanVal: function() {
    return this.frigProps.onValue == this.frigProps.initialValue
  },

  getFriggingValue: function() {
    // boolean value is undefined on initial page load, so value defaults to
    // false
    return this.frigProps[this._getBooleanVal() ? 'onValue' : 'offValue']
  },

  _$el: function() {
    $(this.refs[this.frigProps.inputHtml.ref].getDOMNode())
  },

  _onSwitchChange: function (e, val) {
    this._getBooleanVal() = val
    this._$el().val(this.getFriggingValue())
    this.frigProps.inputHtml.onChange()
  },

  _labelContainerCx: function() {
    return cx({
      "pull-left": this.frigProps.layout == "horizontal",
    })
  },

  _inputContainerCx: function() {
    return cx({
      "pull-right": this.frigProps.layout == "horizontal",
      "controls": this.frigProps.layout == "vertical",
    })
  },

  _label: function() {
    return "" if this.frigProps.label == undefined
    return label(this.frigProps.labelHtml, this.frigProps.label)
  },

  _errorList: function() {
    return "" if (this.state.errors == undefined)
    return errorList(this.state.errors)
  },

  render: function() {
    return div({className: cx(sizeClassNames this.frigProps)},
      div({className: this._labelContainerCx()},
        @_label(),
      )
      div({className: this._inputContainerCx()},
        input(this.frigProps.inputHtml),
        @_errorList(),
      ),
    )
  },

})