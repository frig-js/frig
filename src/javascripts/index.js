// Note: The babel polyfill bloats Frig by ~40kb after minification. If we
// could find a smaller polyfill or a polyfill for just the things we use
// it would save a lot of bytes.
require("babel-core/polyfill")

let Form = require("./components/form.js")
let Input = require("./components/input.js")
let dsl = require("./dsl.js")

module.exports = {
  Form,
  dsl,
  // Setter and getter for the Frig default theme
  defaultTheme(theme) {
    if (theme == null) return form.defaultProps.theme
    if (theme.component == null) throw "Invalid theme. Expected an object"
    Form.defaultProps.theme = theme
    Input.defaultProps.theme = theme
  },
}
