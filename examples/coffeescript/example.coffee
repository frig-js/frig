require "babel-core/polyfill"
require "font-awesome-webpack"
require("frig").defaultTheme require("frigging_bootstrap")

React         = require "react/addons"
{frig}        = require "frig/dsl"
{div, h2, h3, img} = React.DOM

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
    "https://api.github.com/search/users?q=#{username}&per_page=30"

  parseGithubResponse: (json) ->
    json.items.map (user) => label: user.login, value:
      login: user.login
      avatar_url: user.avatar_url

  render: ->
    frig data: @linkState("account"), (f) =>
      div className: "container",
        div className: "row",
          div className: "sm-col-12",
            h2 {}, "My Account"

        div className: "row",
          # The avatar image
          div className: "col-xs-2 pull-right", style: {textAlign: "center"},
            if @state.account.githubAccount?
              img src: @state.account.githubAccount.avatar_url, width: "100%"
            else
              "No Avatar"
          # Email and github account emails (to the left of the avatar image)
          f.input "email", xs: 10
          f.input("githubAccount",
            type: "typeahead",
            remote: {
              url: @githubSearchUrl
              parser: @parseGithubResponse
              maxReqsPerMinute: 10
            }
            xs: 10
          ),

        div className: "row",
          f.input("friendsGithubAccounts",
            type: "typeahead",
            multiple: true,
            remote: {
              url: @githubSearchUrl
              parser: @parseGithubResponse
              maxReqsPerMinute: 20
            }
          ),

        div className: "row",
          f.input "password", xs: 6
          f.input "passwordConfirmation", xs: 6

        div className: "row",
          f.input "description",
            className: "testing-class-name"
            type: "text"
            rows: 10

        div className: "row",
          f.input "time_of_day",
            type: "switch",
            xs: "6"
            label: "Time of Day"

        div className: "row",
          div className: "sm-col-12",
            f.input "startTime",
              type: "time",
              xs: "6"
              placeholder: "12:00pm"
              label: "Start Time"

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
