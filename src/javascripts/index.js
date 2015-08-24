let Form = require("./components/form.js")
let Input = require("./components/input.js")
let ValueLinkedSelect = require("./components/value_linked_select.js")
let util = require("./util.js")
let dsl = require("./dsl.js")

module.exports = {
  Form,
  Input,
  dsl,
  util,
  typeMapping: require("./type_mapping.js"),
  HigherOrderComponents: {
    Boolean: require("./higher_order_components/boolean.js"),
    Focusable: require("./higher_order_components/focusable.js"),
  },
  // Setter and getter for the Frig default theme
  defaultTheme(theme) {
    if (theme == null) return form.defaultProps.theme
    if (theme.component == null) throw "Invalid theme. Expected an object"
    Form.defaultProps.theme = theme
    Input.defaultProps.theme = theme
  },
}
