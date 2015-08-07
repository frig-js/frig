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

  countriesUrl: ->
    "https://gist.githubusercontent.com/Keeguon/2310008/raw/"+
    "bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json"

  parseCountriesIntoOptions: (res) ->
    console.log res.json()
    res.json().map (country) => label: country.name, value: country.code

  render: ->
    frig data: @linkState("account"), (f) =>
      div className: "container",
        div className: "row",
          div className: "sm-col-12",
            h2 {}, "My Account"

        div className: "row",
          f.input "email"

        div className: "row",
          f.input("country",
            type: "typeahead",
            remote: {
              url: @countriesUrl
              parser: @parseCountriesIntoOptions
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
