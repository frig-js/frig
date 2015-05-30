# Setting the default theme to bootstrap
module.exports =
  # Frig core mixins
  Mixin: require "./frig/mixins/frig_mixin"
  InputMixin: require "./frig/mixins/input_mixin"
  FormMixin: require "./frig/mixins/input_mixin"

  # Frig extension points
  typeMapping: require "./frig/type_mapping"
  validations: require "./frig/validations"

  # Frig default theme (Frigging Bootstrap)
  theme: "friggingBootstrap"
  friggingBootstrap: require "./frig/themes/frigging_bootstrap.coffee"

# Frigging Bootstrap's default input components
AddBootstrapInputs = (inputs...) ->
  require "./frig/themes/frigging_bootstrap/#{k}" for k in inputs

AddBootstrapInputs
  "checkbox"
  "errors"
  "form"
  "input"
  "select"
  "submit"
  "switch"
  "text"
  "typeahead"
