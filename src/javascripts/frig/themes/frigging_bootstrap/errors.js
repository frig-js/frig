var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.coffee")
var {errorList}                   = friggingBootstrap
var {div, span, i}                = React.DOM
var {humanize, clone, merge, map} = require("../../helpers.coffee")

friggingBootstrap.Errors = class {

  constructor() {
    this.displayName = 'Frig.friggingBootstrap.Errors'
  }

  render() {
    div({className: "row"},
      map(this.props.errors, (error) => {
        div({className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
          div({className: "frigging-bootstrap-error", ref: "error-#{error}"},
            div({className: "alert alert-danger"},
              i({className:"fa fa-exclamation-circle"}),
              span({className: "sr-only"}, "Error:"),
              " #{error}",
              div({className: "clearfix"}),
            ),
          ),
        ),
      }),
    )
  }

}