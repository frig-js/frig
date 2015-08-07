require "babel-core/polyfill"
require("frig").defaultTheme require("frigging_bootstrap")

React         = require "react/addons"
{frig}        = require "frig/dsl"
{div, h2, h3} = React.DOM

AccountForm = React.createClass
  mixins: [
    React.addons.LinkedStateMixin
  ]

  getInitialState: ->
    account:
      email: "me@test.com"
      password: "test"
      shareSketchyInfo: false

  githubSearchUrl: (username) ->
    "https://api.github.com/search/users?q=#{username}&per_page=5"

  parseGithubResponse: (json) ->
    json.items.map (user) => label: user.login, value: user.login

  render: ->
    frig data: @linkState("account"), (f) =>
      div className: "container",
        div className: "row",
          div className: "sm-col-12",
            h2 {}, "My Account"

        div className: "row",
          f.input "email"

        div className: "row",
          f.input("githubAccount",
            type: "typeahead",
            remote: {
              url: @githubSearchUrl
              parser: @parseGithubResponse
              maxReqsPerMinute: 20
            }
          )

        div className: "row",
          f.input "password", xs: 6
          f.input "passwordConfirmation", xs: 6

        div className: "row",
          div className: "sm-col-12",
            h3 {}, "Additional Sketchy Info"

        div className: "row",
          f.input "shareSketchyInfo"
          if @state.account.shareSketchyInfo
            [
              f.input "socialSecurityNumber"
              f.input "fullName"
              f.input "eyeColor", options: [
                "blue", "green", "red", "left"
              ]
            ]

          f.submit "Save"

document.addEventListener "DOMContentLoaded", ->
  reactElement = React.createElement AccountForm
  domElement = document.getElementById('example')
  React.render reactElement, domElement
