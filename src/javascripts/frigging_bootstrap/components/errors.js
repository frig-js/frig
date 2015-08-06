var React                         = require("react")
var {div, span, i}                = React.DOM

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Errors"

  static defaultProps = require("../default_props.js")

  render() {
    return div({className: "row"},
      this.props.errors.map((error) => {
        return [
          div({className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
            div({className: "frigging-bootstrap-error", ref: `error-${error}`},
              div({className: "alert alert-danger"},
                i({className:"fa fa-exclamation-circle"}),
                span({className: "sr-only"}, "Error:"),
                ` ${error}`,
                div({className: "clearfix"}),
              ),
            ),
          ),
        ]
      }),
    )
  }

}
