friggingBootstrap             = require "../frigging_bootstrap.coffee"
frigHelpers                   = require "../../helpers.coffee"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
{div, label, input}           = React.DOM
cx = React.addons.classSet

friggingBootstrap.Input = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Input'

  mixins: [Frig.InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false

  getFriggingProps: ->
    # Bootstrap input addon texts
    prefix:          undefined
    suffix:          undefined

    inputHtml:
      className: "form-control"
      placeholder: -> @frigProps.placeholder
      type: -> @frigProps.htmlInputType
      defaultValue: -> @frigProps.initialValue

  _cx: ->
    cx
      "has-error": @state.errors?
      "has-success": @state.edited && !@state.errors?

  _input: ->
    input @frigProps.inputHtml

  render: ->
    div className: cx(sizeClassNames @frigProps),
      div className: @_cx(),
        label @frigProps.labelHtml, @frigProps.label if @frigProps.label
        div className: "controls",
          if @frigProps.prefix? || @frigProps.suffix?
            div className: "input-group",
              if @frigProps.prefix
                div className: "input-group-addon", @frigProps.prefix
              @_input()
              if @frigProps.suffix
                div className: "input-group-addon", @frigProps.suffix
          else
            @_input()
        errorList @state.errors if @state?.errors?
