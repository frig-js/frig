friggingBootstrap             = require "../frigging_bootstrap.coffee"
frigHelpers                   = require "../../helpers.coffee"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, span, input, label}     = React.DOM
cx = React.addons.classSet

# Example 1) Using a switch for one input:
#
#   data = allIsWell: true
#
#   @frig ref: "ex1", data: data ->
#     f.input "allIsWell", template: "switch"

# Example 2) Using switches as the default for all boolean inputs in a form:
#
#   data = allIsWell: true
#
#   @frig ref: "ex2", data: data, typeMapping: {boolean: "switch"}, ->
#     f.input "allisWell"

# Example 3) Using switches as the default for all boolean inputs in all forms:
#
#   Frig.typeMapping.boolean.template = "switch"
#
#   data = allIsWell: true
#
#   @frig ref: "ex2", data: data, ->
#     f.input "allisWell"

# This optional add-on component depends on BootstrapSwitch and jQuery
friggingBootstrap.Switch = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Switch'

  mixins: [Frig.InputMixin]

  getFriggingProps: ->
    handleWidth:     undefined
    inputHtml:
      className:     "switch"
      type:          "checkbox"
    offColor:        undefined
    offText:         undefined
    offValue:        false
    onColor:         "success"
    onText:          undefined
    onValue:         true

  componentDidMount: ->
    # get initial state (boolean) by checking whether the initialValue
    # is the same as the onValue/offValue (-> true/false) of the switch
    @_$el().bootstrapSwitch
      disabled: @frigProps.disabled
      handleWidth: @frigProps.handleWidth
      offColor: @frigProps.offColor
      offText: @frigProps.offText
      onColor: @frigProps.onColor
      onText: @frigProps.onText
      size: "small"
      state: @_getBooleanVal()
      onSwitchChange: @_onSwitchChange

  _getBooleanVal: ->
    @_booleanVal ?= @frigProps.onValue == @frigProps.initialValue

  getFriggingValue: ->
    # boolean value is undefined on initial page load, so value defaults to false
    @frigProps[if @_getBooleanVal() then 'onValue' else 'offValue']

  _$el: ->
    $ @refs[@frigProps.inputHtml.ref].getDOMNode()

  _onSwitchChange: (e, val) ->
    @_booleanVal = val
    @_$el().val @getFriggingValue()
    @frigProps.inputHtml.onChange()

  _labelContainerCx: ->
    cx
      "pull-left": @frigProps.layout == "horizontal"

  _inputContainerCx: ->
    cx
      "pull-right": @frigProps.layout == "horizontal"
      "controls": @frigProps.layout == "vertical"

  render: ->
    div className: cx(sizeClassNames @frigProps),
      div className: @_labelContainerCx(),
        label @frigProps.labelHtml, @frigProps.label if @frigProps.label
      div className: @_inputContainerCx(),
        input @frigProps.inputHtml
        errorList @state.errors if @state?.errors?
