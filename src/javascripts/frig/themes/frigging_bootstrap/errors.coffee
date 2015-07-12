React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
{errorList}                   = friggingBootstrap
{div, span, i}                = React.DOM
{humanize, clone, merge, map} = require "../../helpers.coffee"

friggingBootstrap.Errors = React.createClass

  displayName: 'Frig.friggingBootstrap.Errors'

  render: ->
    div {className: "row"},
      map @props.errors, (error) ->
        div {className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
          div className: "frigging-bootstrap-error", ref: "error-#{error}",
            div className: "alert alert-danger",
              i className:"fa fa-exclamation-circle"
              span className: "sr-only", "Error:"
              " #{error}"
              div className: "clearfix"
