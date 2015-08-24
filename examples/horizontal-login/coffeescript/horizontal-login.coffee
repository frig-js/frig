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
      h2 {}, "Please sign in"
      f.errors()
      f.input "account",
        autoFocus: true
        inputHtml: {autoComplete: "off"}
      f.input "password",
        type: "password"
        inputHtml: {autoComplete: "off"}
      f.input "remember_me", type: "boolean"
      f.submit "Sign in",
        bsStyle: "primary"
        bsSize: "lg"
        block: true

  render: ->
    div className: "row",
      div className: "col-xs-4 col-xs-offset-4",
        frig data: {}, layout: "horizontal", align: "right", @form

window.addEventListener "load", ->
  el = document.getElementById "horizontal-login"
  React.render React.createElement(MinimalLogin), el
