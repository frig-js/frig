var React                         = require("react")
var {span, label} = React.DOM
var cx = require("classnames")

module.exports = {
  errorList(errors) {
    let i = 0
    return (errors || []).map( (msg) => module.exports.error(msg, i++))
  },

  error(msg, i=0) {
    return span({className: "help-block", key: `error-${i}`},
      React.DOM.i({className: "fa fa-exclamation-circle"}, ` ${msg}`),
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

  formGroupCx(props, overrides = {}) {
    let isCheckbox = props.inputHtml.type === "checkbox"
    return cx(Object.assign({
      "form-group": !isCheckbox,
      "checkbox": isCheckbox,
      "has-error": props.errors != null,
      "has-success": props.modified && props.errors == null,
    }, overrides))
  },

}
