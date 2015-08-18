let Form = require("./components/form.js")
let Input = require("./components/input.js")
let ValueLinkedSelect = require("./components/value_linked_select.js")
let booleanHOC = require("./higher_order_components/boolean.js")
let util = require("./util.js")
let dsl = require("./dsl.js")
console.log("FRIG")
module.exports = {
  Form,
  Input,
  dsl,
  util,
  HigherOrderComponents: {
    Boolean: booleanHOC
  },
  // Setter and getter for the Frig default theme
  defaultTheme(theme) {
    if (theme == null) return form.defaultProps.theme
    if (theme.component == null) throw "Invalid theme. Expected an object"
    Form.defaultProps.theme = theme
    Input.defaultProps.theme = theme
  },
}
console.log(module.exports)