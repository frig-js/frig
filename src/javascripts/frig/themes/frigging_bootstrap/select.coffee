React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
frigHelpers                   = require "../../helpers.coffee"
InputMixin                    = require "../../mixins/input_mixin.coffee"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, label, select, option}  = React.DOM
cx = React.addons.classSet

friggingBootstrap.Select = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Select'

  mixins: [InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false

  getFriggingProps: ->
    inputHtml:
      className: "form-control"
      defaultValue: -> @frigProps.initialValue
    labelHtml:
      className: ""

  _cx: ->
    cx
      "form-group": true
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
