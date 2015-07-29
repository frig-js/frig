var typeMapping = require("./type_mapping.js")
var {humanize} = require("./helpers.js")

// When in doubt add defaults in alphabetical order
// Defaults can depend on previous default values if they are
// defined after their dependencies.
module.exports = {
  // For Frig internal use only
  children:              undefined,
  fieldKey:              undefined,
  formRef:               undefined,
  onFriggingChildInit:   undefined,
  onFriggingChildChange: undefined,
  validationState:       undefined,

  // Public settings
  data:            {},
  type:            undefined,
  initialValue:    undefined,
  title:           function () {return humanize(this.frigProps.fieldKey)},
  label:           function () {return this.frigProps.title},
  placeholder:     function () {return this.frigProps.title},
  htmlInputType:   function () {return typeMapping[this.frigProps.type].htmlInputType},
  options:         undefined,
  layout:          undefined,
  className:       undefined,
  disabled:        undefined,
  multiple:        undefined,
  theme:           "friggingBootstrap",

  // Validation flags
  required:        function () {return this.frigProps.type !== "boolean"},
  min:             undefined,
  max:             undefined,

  // Callbacks
  onChange:        undefined,
  onSubmit:        undefined,

  // DOM attributes + React ref + callbacks for the form element
  formHtml: {
    // For Frig internal use only
    ref:           function () {return this.frigProps.formRef},
    onSubmit:      function () {return this._frigOnSubmit},
  },

  // DOM attributes for the label element
  labelHtml: {
    htmlFor:       function () {return this.frigProps.fieldKey},
  },

  // DOM attributes + React ref + callbacks for the input element
  inputHtml: {
    ref:           "input",                  // For Frig internal use only
    name:          function () {return this.frigProps.fieldKey},
    autoFocus:     function () {return this.frigProps.autoFocus},
    onChange:      function () {return this._frigOnChange}, // For Frig internal use only
    onBlur:        function () {return this._frigOnBlur},   // For Frig internal use only
    className:     function () {return this.frigProps.className},
    disabled:      function () {return this.frigProps.disabled},
    multiple:      function () {return this.frigProps.multiple},
  },

  // The compiled list of validations to run (based on validation flags /\)
  validations: function() {
    return {
      required:      this.frigProps.required || false,
      min:           this.frigProps.min || false,
      max:           this.frigProps.max || false,
    }
  },

}
