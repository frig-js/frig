require("frig").defaultTheme require("frigging-bootstrap")

React = require "react/addons"
{frig} = require("frig").dsl
{div, h2, h3, h4, img, ul, li} = React.DOM

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
      stuff_or_things: ["stuff-value"]
      single_select_typeahead: "stuff-value"

  # githubSearchUrl: (username) ->
  #   "https://api.github.com/search/users?q=#{username}&per_page=30"

  # parseGithubResponse: (json) ->
  #   json.items.map (user) => label: user.login, value:
  #     login: user.login
  #     avatar_url: user.avatar_url

  onSubmit: (e) ->
    e.preventDefault()

  formOpts: ->
    data: @linkState("account")
    errors:
      base: ["Test Error", "Moo"]
      email: ["This Error is a Test"]
    # errors: ["Test Error", "Moo"]
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
          f.input "InputWithoutALabel",
            xs: 12
            label: false
            saved: true
            placeholder: "Input Without a Label"
          f.input "email", saved: true
          f.input "select_example",
            options: [
              # The 3 formats for options
              # 1. An object with a label and a value (perfered)
              {label: "Stuff", value: "stuff-value"},
              # 2. An array of the [value, label]
              ["thing-value", "Things"],
              # 3. A string. For scenarios where the label equals the value.
              "why not both?"
            ]

        div className: "row",
          div className: "col-xs-12",
            h2 {}, "Typeaheads"

          f.input "stuff_or_things",
            type: "typeahead",
            multiple: true,
            options: [
              # The 3 formats for options
              # 1. An object with a label and a value (perfered)
              {label: "Stuff", value: "stuff-value"},
              # 2. An array of the [value, label]
              ["thing-value", "Things"],
              # 3. A string. For scenarios where the label equals the value.
              "why not both?"
            ]

          f.input "single_select_typeahead",
            type: "typeahead",
            options: [
              # The 3 formats for options
              # 1. An object with a label and a value (perfered)
              {label: "Stuff", value: "stuff-value"},
              # 2. An array of the [value, label]
              ["thing-value", "Things"],
              # 3. A string. For scenarios where the label equals the value.
              "why not both?"
            ]

          f.input "customSelectionRendering",
            type: "typeahead",
            multiple: true,
            displaySelections: false,
            options: [
              # The 3 formats for options
              # 1. An object with a label and a value (perfered)
              {label: "Stuff", value: "stuff-value"},
              # 2. An array of the [value, label]
              ["thing-value", "Things"],
              # 3. A string. For scenarios where the label equals the value.
              "why not both?"
            ]
          # Rendering the selection independently of the typeahead for
          # customization purposes
          div className: "col-xs-12",
            h4 {}, "Custom Selections"
            ul {},
              (@state.account.customSelectionRendering||[]).map (selection) =>
                li {key: "o-#{selection}"}, "I choose #{selection}"
            if !@state.account.customSelectionRendering?
              div {}, "No Selection"

        div className: "row",
          div className: "col-xs-12",
            h2 {}, "Passwords"
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
            handleWidth: 100
            onText: "Enabled"
            offText: "Disabled"
            errors: ["This error is an example", "As is this one"]
          f.input "time_of_night",
            type: "switch",
            xs: "6",
            label: false
            saved: true
          f.input "red_or_blue",
            type: "switch"
            onText: "Red"
            offText: "Blue"
            onValue: "red"
            offValue: "blue"

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
