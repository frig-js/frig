React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
FormMixin                     = require "../../mixins/form_mixin.coffee"
{errorList}                   = friggingBootstrap
{div, form, label, input}     = React.DOM

friggingBootstrap.Form = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Form'

  mixins: [FormMixin]

  getLayout: ->
    @frigProps.layout || "horizontal"

  getFriggingProps: ->
    layout: @getLayout()
    formHtml:
      className: "form-#{@getLayout()}" if @frigProps.className != false

  render: ->
    form @frigProps.formHtml, @friggingChildren()
