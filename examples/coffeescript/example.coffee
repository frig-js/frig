require "./node_modules/bootstrap/dist/css/bootstrap.css"
React = require "react/addons"
Frig = require "frig"
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
      shareSketchyInfo: false

  render: ->
    @frig data: @linkState("account"), (f) =>
      div className: "container",
        div className: "row",
          div className: "sm-col-12",
            h2 {}, "My Account"

        div className: "row",
          f.input "email"

        div className: "row",
          f.input "password", xs: 6
          f.input "passwordConfirmation", xs: 6

        div className: "row",
          div className: "sm-col-12",
            h3 {}, "Additional Sketchy Info"

        div className: "row",
          f.input "shareSketchyInfo"
          if @state.account.shareSketchyInfo
            f.input "socialSecurityNumber"
            f.input "fullName"

          f.submit "Save"

document.addEventListener "DOMContentLoaded", ->
  reactElement = React.createElement accountForm
  domElement = document.getElementById('example')
  React.render reactElement, domElement
