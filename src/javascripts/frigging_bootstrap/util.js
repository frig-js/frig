var React                         = require("react")
var {span, i, label} = React.DOM
var cx = require("classnames")

module.exports = {
  errorList(errors) {
    return (errors || []).map(module.exports.error)
  },

  error(msg) {
    return span({className: "help-block"},
      i({className: "fa fa-exclamation-circle"}, ` ${msg}`),
    )
  },

  label(props, overrides = {}) {
    let labelHtml = Object.assign({}, props, overrides)
    return props.label == null ? "" : label(labelHtml, props.label)
  },

  sizeClassNames(props) {
    var classes = {}
    var sizes = ["xs", "sm", "md", "lg"]
    // Adding column classes
    for (var k of sizes) {
      if (props[k] != null) classes[`col-${k}-${props[k]}`] = true
    }
    // Adding offset classes
    for (var size of sizes) {
      k = `${size}Offset`
      if (props[k] == null) continue
      classes[`col-${size}-offset-${props[k]}`] = true
    }
    return classes
  },

  formGroupCx(props) {
    let isCheckbox = props.inputHtml.type === "checkbox"
    return cx({
      "form-group": !isCheckbox,
      "checkbox": isCheckbox,
      "has-error": props.errors != null,
      "has-success": props.modified && props.errors == null,
    })
  },

}