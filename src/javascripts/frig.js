module.exports = {
  # Frig core mixins
  Mixin: require("./frig/mixins/frig_mixin.js"),
  InputMixin: require("./frig/mixins/input_mixin.js"),
  FormMixin: require("./frig/mixins/form_mixin.js"),

  # Frig extension points
  typeMapping: require("./frig/type_mapping.js"),
  validations: require("./frig/validations.js"),
}

# Frigging Bootstrap's default input components
var AddBootstrapInputs = function (inputs) {
  for (k in inputs) require("./frig/themes/frigging_bootstrap/#{k}.js")
}

AddBootstrapInputs [
  "checkbox",
  "errors",
  "form",
  "input",
  "select",
  "submit",
  "switch",
  "text",
  "typeahead",
]