Frig = require("frig")
Frig.defaultTheme require "frigging-bootstrap"
Frig.typeMapping.boolean = {component: "switch"}

React = require "react/addons"
{frig} = require("frig").dsl
{div, h2} = React.DOM

# An example of a plain old form without react link.
MinimalLogin = React.createClass

  mixins: [React.addons.LinkedStateMixin]

  form: (f) ->
    div className: "row",
      h2 {className: "col-xs-12"}, "Sign In"
      f.errors()
      f.input "email",
        block: true
        autoFocus: true
        inputHtml: {autoComplete: "off"}
      f.input "password",
        block: true
        inputHtml: {autoComplete: "off"}
      f.input "turbo_mode",
        labelWidth: {xs: 6}
        type: "boolean"
      f.submit "Let's do this!",
        bsStyle: "primary"
        bsSize: "lg"
        block: true

  render: ->
    containerClasses =
      "col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-xs-12"
    div className: "row",
      div className: containerClasses,
        frig data: {}, layout: "horizontal", align: "right", @form

window.addEventListener "load", ->
  el = document.getElementById "horizontal-login"
  React.render React.createElement(MinimalLogin), el
