let formDefaultProps = require("./components/form.js").defaultProps

module.exports = {
  set theme(theme) {
    if (theme.component == null) throw "Invalid theme. Expected an object"
    formDefaultProps.theme = theme
  },

  get theme() {
    return formDefaultProps.theme
  },

  // Frig core mixins
  // Mixin: require("./components/frig_mixin.js"),
  InputMixin: require("./components/input_mixin.js"),
  // FormMixin: require("./components/form_mixin.js"),

  // Frig extension points
  typeMapping: require("./type_mapping.js"),
  validations: require("./validations.js"),
}
