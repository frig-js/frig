friggingBootstrap             = require "../frigging_bootstrap.coffee"
friggingBootstrap             = require "../../helpers.coffee"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, label, textarea}        = React.DOM
cx = React.addons.classSet

friggingBootstrap.Text = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Text'

  mixins: [Frig.InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false

  getFriggingProps: ->
    inputHtml:
      className: "form-control"
      placeholder: -> @frigProps.placeholder
      rows: 3
      defaultValue: -> @frigProps.initialValue
    labelHtml:
      className: "control-label"

  _cx: ->
    cx
      "has-error": @state.errors?
      "has-success": @state.edited && !@state.errors?

  render: ->
    div className: cx(sizeClassNames @frigProps),
      div className: @_cx(),
        label @frigProps.labelHtml, @frigProps.label if @frigProps.label
        div className: "controls",
          textarea @frigProps.inputHtml
        errorList @state.errors if @state?.errors?
