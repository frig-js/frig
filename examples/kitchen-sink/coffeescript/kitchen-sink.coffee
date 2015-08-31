require("frig").defaultTheme require("frigging-bootstrap")

React = require "react/addons"
{frig} = require("frig").dsl
{div, h2, h3, h4, img} = React.DOM

AccountForm = React.createClass
  mixins: [
    React.addons.LinkedStateMixin
  ]

  getInitialState: ->
    account:
      email: "me@test.com"
      password: "test"
      shareSketchyInfo: false
      addresses: [{address: "55 Actual Place Rd."}, {}]

  githubSearchUrl: (username) ->
    "https://api.github.com/search/users?q=#{username}&per_page=30"

  parseGithubResponse: (json) ->
    json.items.map (user) => label: user.login, value:
      login: user.login
      avatar_url: user.avatar_url

  onSubmit: (e) ->
    e.preventDefault()

  formOpts: ->
    data: @linkState("account")
    errors: ["Test Error", "Moo"]
    onSubmit: @onSubmit,
    # layout: "horizontal"

  render: ->
    frig @formOpts(), (f) =>
      div {},
        div className: "row",
          div className: "col-xs-12",
            h2 {}, "My Account"

        div className: "row",
          f.errors()

        div className: "row",
          # The avatar image
          div className: "col-xs-2 pull-right", style: {textAlign: "center"},
            if @state.account.githubAccount?
              img src: @state.account.githubAccount.avatar_url, width: "100%"
            else
              "No Avatar"
          # Email and github account emails (to the left of the avatar image)
          f.input "InputWithoutALabel",
            xs: 10
            label: false
            saved: true
            placeholder: "Input Without a Label"
          f.input "email", xs: 10, saved: true
          f.input("githubAccount",
            type: "typeahead",
            errors: ["test"],
            remote: {
              url: @githubSearchUrl
              parser: @parseGithubResponse
              maxReqsPerMinute: 10
            }
            xs: 10,
            saved: true
          ),

        div className: "row",
          f.input("friendsGithubAccounts",
            type: "typeahead",
            multiple: true,
            label: false,
            saved: true
            remote: {
              url: @githubSearchUrl
              parser: @parseGithubResponse
              maxReqsPerMinute: 20
            }
          ),

        div className: "row",
          f.input("stuff_or_things",
            type: "typeahead",
            multiple: true,
            options: [
              # The 3 formats for options
              # 1. An object with a label and a value (perfered)
              {label: "Stuff", value: "stuff-value"},
              # 2. An array of the [label, value]
              ["Things", "thing-value"],
              # 3. A string. For scenarios where the label equals the value.
              "why not both?"
            ]
          ),

        div className: "row",
          f.input "password", xs: 6
          f.input "passwordConfirmation", xs: 6

        div className: "row",
          f.input "description",
            className: "testing-class-name"
            type: "text"
            rows: 5
            xs: 12
            saved: true

          f.input "description-two",
            className: "testing-class-name"
            type: "text"
            rows: 5
            label: false
            placeholder: "Description without a label"
            saved: true
            xs: 12

        div className: "row",
          f.input "time_of_day",
            type: "switch",
            xs: "6",
            label: "Time of Day",
            saved: true
            errors: ["This error is an example", "As is this one"]
          f.input "time_of_night",
            type: "switch",
            xs: "6",
            label: "Time of Night",
            label: false
            saved: true

        div className: "row",
          f.input("uploadAvatar",
            type: "file",
            xs: "6"
            label: "Uploading Avatar"
            saved: true
          ),
          f.input "uploadVirus",
            type: "file",
            xs: "6"
            label: false
            saved: true
        div className: "row",
          f.input "startTime",
            type: "time"
            xs: "12"
            placeholder: "12:00pm"
            label: "Start Time"
            saved: true
          f.input "endTime",
            type: "time"
            xs: "12"
            placeholder: "End Time"
            label: false
            saved: true
        div className: "row",
          f.input "colorOne",
            type: "color"
            xs: "12"
            label: "Color One"
            saved: true
          f.input "colorTwo",
            type: "color"
            xs: "12",
            label: false
            saved: true
        div className: "row",
          div className: "col-xs-12",
            h3 {}, "Nested Fields (Eg. Has Many)"
          f.nestedFields "addresses", (f, index) ->
            div {},
              div className: "col-xs-12",
                h4 {}, "Address ##{index+1}"
              f.input "address"
              f.input "city"
              f.input "postal_code"

        div className: "row",
          div className: "col-xs-12",
            h3 {}, "Additional Sketchy Info"

        div className: "row",
          f.input "shareSketchyInfo", saved: true
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
  el = document.getElementById "kitchen-sink"
  React.render React.createElement(AccountForm), el
