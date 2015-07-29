module.exports = {
  // Frig core mixins
  Mixin: require("./frig/mixins/frig_mixin.js"),
  InputMixin: require("./frig/mixins/input_mixin.js"),
  FormMixin: require("./frig/mixins/form_mixin.js"),

  // Frig extension points
  typeMapping: require("./frig/type_mapping.js"),
  validations: require("./frig/validations.js"),
}

// Frigging Bootstrap"s default input components
require("./frig/themes/frigging_bootstrap/checkbox.js")
require("./frig/themes/frigging_bootstrap/errors.js")
require("./frig/themes/frigging_bootstrap/form.js")
require("./frig/themes/frigging_bootstrap/input.js")
require("./frig/themes/frigging_bootstrap/select.js")
require("./frig/themes/frigging_bootstrap/submit.js")
require("./frig/themes/frigging_bootstrap/switch.js")
require("./frig/themes/frigging_bootstrap/text.js")
require("./frig/themes/frigging_bootstrap/typeahead.js")
