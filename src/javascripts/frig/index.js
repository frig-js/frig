let formDefaultProps = require("./components/form.js").defaultProps
let inputDefaultProps = require("./components/input.js").defaultProps

module.exports = {
  // Setter and getter for the Frig default theme
  defaultTheme(theme) {
    if (theme == null) return formDefaultProps.theme
    if (theme.component == null) throw "Invalid theme. Expected an object"
    formDefaultProps.theme = theme
    inputDefaultProps.theme = theme
  },
}
