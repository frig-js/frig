friggingBootstrap = require "../frigging_bootstrap"
frigHelpers       = require "../../helpers"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, label, select, option}  = React.DOM
cx = React.addons.classSet

friggingBootstrap.Select = React.createClass

  displayName: 'Frig.friggingBootstrap.Select'

  mixins: [Frig.InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false

  getFriggingProps: ->
    inputHtml:
      className: "form-control"
      defaultValue: -> @frigProps.initialValue
    labelHtml:
      className: "control-label"

  _cx: ->
    cx
      "has-error": @state.errors?
      "has-success": @state.edited && !@state.errors?

  _selectOption: (opts) ->
    opts = @normalizeFriggingOption opts
    option value: opts.value, opts.label

  render: ->
    div className: cx(sizeClassNames @props),
      div className: @_cx(),
        label @frigProps.labelHtml, @frigProps.label if @frigProps.label
        div className: "controls",
          select @frigProps.inputHtml,
            map @frigProps.options, @_selectOption
        errorList @state.errors if @state?.errors?
