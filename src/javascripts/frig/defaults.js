var frigHelpers = require("./helpers.coffee");
var typeMapping = require("./type_mapping.coffee");
var {humanize, clone, merge, map, capitalize, guessType} = frigHelpers;

// When in doubt add defaults in alphabetical order
// Defaults can depend on previous default values if they are
// defined after their dependencies.
module.exports = defaults = {
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
  required:        function() {this.frigProps.type !== "boolean"},
  min:             undefined,
  max:             undefined,

  // Callbacks
  onChange:        undefined,
  onSubmit:        undefined,

  // DOM attributes + React ref + callbacks for the form element
  formHtml: {
    // For Frig internal use only
    ref:           function() {this.frigProps.formRef},
    onSubmit:      function() {this._frigOnSubmit}
  },
  // DOM attributes for the label element
  labelHtml: {
    htmlFor:       function() {this.frigProps.fieldKey}
  },
  // DOM attributes + React ref + callbacks for the input element
  inputHtml: {
    ref:           "input"                      // For Frig internal use only
    name:          function() {this.frigProps.fieldKey},
    autoFocus:     function() {this.frigProps.autoFocus},
    onChange:      function() {this._frigOnChange}, // For Frig internal use only
    onBlur:        function() {this._frigOnBlur},   // For Frig internal use only
    className:     function() {this.frigProps.className},
    disabled:      function() {this.frigProps.disabled},
    multiple:      function() {this.frigProps.multiple}
  },
  // The compiled list of validations to run (based on validation flags /\)
  validations: function() {
    {
      required:      this.frigProps.required || false,
      min:           this.frigProps.min || false,
      max:           this.frigProps.max || false
    }
  }
}