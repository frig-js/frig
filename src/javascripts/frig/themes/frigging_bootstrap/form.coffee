friggingBootstrap = require "../frigging_bootstrap"
{errorList}               = friggingBootstrap
{div, form, label, input} = React.DOM

friggingBootstrap.Form = React.createClass

  displayName: 'Frig.friggingBootstrap.Form'

  mixins: [Frig.FormMixin]

  getLayout: ->
    @frigProps.layout || "horizontal"

  getFriggingProps: ->
    layout: @getLayout()
    formHtml:
      className: "form-#{@getLayout()}" if @frigProps.className != false

  render: ->
    form @frigProps.formHtml, @friggingChildren()
