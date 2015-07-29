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
  title:           () => humanize(this.frigProps.fieldKey),
  label:           () => this.frigProps.title,
  placeholder:     () => this.frigProps.title,
  htmlInputType:   () => typeMapping[this.frigProps.type].htmlInputType,
  options:         undefined,
  layout:          undefined,
  className:       undefined,
  disabled:        undefined,
  multiple:        undefined,
  theme:           "friggingBootstrap",

  // Validation flags
  required:        () => this.frigProps.type !== "boolean",
  min:             undefined,
  max:             undefined,

  // Callbacks
  onChange:        undefined,
  onSubmit:        undefined,

  // DOM attributes + React ref + callbacks for the form element
  formHtml: {
    // For Frig internal use only
    ref:           () => this.frigProps.formRef,
    onSubmit:      () => this._frigOnSubmit,
  },

  // DOM attributes for the label element
  labelHtml: {
    htmlFor:       () => this.frigProps.fieldKey,
  },

  // DOM attributes + React ref + callbacks for the input element
  inputHtml: {
    ref:           "input",                  // For Frig internal use only
    name:          () => this.frigProps.fieldKey,
    autoFocus:     () => this.frigProps.autoFocus,
    onChange:      () => this._frigOnChange, // For Frig internal use only
    onBlur:        () => this._frigOnBlur,   // For Frig internal use only
    className:     () => this.frigProps.className,
    disabled:      () => this.frigProps.disabled,
    multiple:      () => this.frigProps.multiple,
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
