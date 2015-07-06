React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
InputMixin                    = require "../../mixins/input_mixin.coffee"
{input}                       = React.DOM

friggingBootstrap.Submit = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Submit'

  mixins: [InputMixin]

  getFriggingProps: ->
    inputHtml:
      placeholder:  -> @frigProps.placeholder
      defaultValue: -> @frigProps.initialValue
      className:    -> @frigProps.className
      type:         -> @frigProps.htmlInputType

  render: ->
    input @frigProps.inputHtml
