module.exports = {
  # Frig core mixins
  Mixin: require("./frig/mixins/frig_mixin.coffee"),
  InputMixin: require("./frig/mixins/input_mixin.coffee"),
  FormMixin: require("./frig/mixins/form_mixin.coffee"),

  # Frig extension points
  typeMapping: require("./frig/type_mapping.coffee"),
  validations: require("./frig/validations.coffee"),
}

# Frigging Bootstrap's default input components
var AddBootstrapInputs = function (inputs) {
  for (k in inputs) require("./frig/themes/frigging_bootstrap/#{k}.coffee")
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