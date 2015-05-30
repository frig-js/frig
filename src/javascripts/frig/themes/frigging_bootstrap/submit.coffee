friggingBootstrap = require "../frigging_bootstrap"
{input} = React.DOM

friggingBootstrap.Submit = React.createClass

  displayName: 'Frig.friggingBootstrap.Submit'

  mixins: [Frig.InputMixin]

  getFriggingProps: ->
    inputHtml:
      placeholder:  -> @frigProps.placeholder
      defaultValue: -> @frigProps.initialValue
      className:    -> @frigProps.className
      type:         -> @frigProps.htmlInputType

  render: ->
    input @frigProps.inputHtml
