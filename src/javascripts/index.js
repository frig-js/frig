let form = require("./components/form.js")
let input = require("./components/input.js")
let dsl = require("./dsl.js")

module.exports = {
  form,
  dsl,
  // Setter and getter for the Frig default theme
  defaultTheme(theme) {
    if (theme == null) return form.defaultProps.theme
    if (theme.component == null) throw "Invalid theme. Expected an object"
    form.defaultProps.theme = theme
    input.defaultProps.theme = theme
  },
}
