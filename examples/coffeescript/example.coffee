React = require "react/addons"
Frig = require "frig.coffee"
{div, h2, h3} = React.DOM

accountForm = React.createClass
  mixins: [
    Frig.Mixin
    React.addons.LinkedStateMixin
  ]

  getInitialState: ->
    account:
      email: "me@test.com"
      password: "test"
      shareSketchyInfo: true

  render: ->
    console.log React
    console.log @
    @frig data: @linkState("account"), (f) ->
      div {},
        h2 {}, "My Account"

        f.input "email"
        f.input "password"
        f.input "passwordConfirmation"

        h3, {}, "Additional Sketchy Info"
        f.input "shareSketchyInfo", type: "boolean"

        if state.shareSketchyInfo
          f.input "socialSecurityNumber"
          f.input "fullName"

        f.submit "Save"

document.addEventListener "DOMContentLoaded", ->
  reactElement = React.createElement accountForm
  domElement = document.getElementById('example')
  React.render reactElement, domElement
