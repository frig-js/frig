React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
InputMixin                    = require "../../mixins/input_mixin.coffee"
{div, input}                  = React.DOM
{sizeClassNames}              = friggingBootstrap
cx = React.addons.classSet

friggingBootstrap.Submit = React.createClass

  displayName: 'Frig.friggingBootstrap.Submit'

  mixins: [InputMixin]

  getFriggingProps: ->
    inputHtml:
      placeholder:  -> @frigProps.placeholder
      defaultValue: -> @frigProps.initialValue
      className:    -> @frigProps.className || "btn btn-default"
      type:         -> @frigProps.htmlInputType

  render: ->
    div className: cx(sizeClassNames @frigProps),
      div className: "form-group",
        input @frigProps.inputHtml
