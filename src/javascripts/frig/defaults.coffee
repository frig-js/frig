frigHelpers = require "./helpers.coffee"
{humanize, clone, merge, map, capitalize, guessType} = frigHelpers

# When in doubt add defaults in alphabetical order
module.exports = defaults =
  # For Frig internal use only
  children:              undefined
  fieldKey:              undefined
  formRef:               undefined
  onFriggingChildInit:   undefined
  onFriggingChildChange: undefined
  validationState:       undefined

  # Public settings (function determined values)
  data:            -> {}
  htmlInputType:   -> Frig.typeMapping[@frigProps.type].htmlInputType
  label:           -> @frigProps.title
  placeholder:     -> @frigProps.title
  title:           -> humanize @frigProps.fieldKey

  # Public settings (undefined)
  className:       undefined
  disabled:        undefined
  initialValue:    undefined
  layout:          undefined
  multiple:        undefined
  options:         undefined
  type:            undefined

  # Validation flags
  required:        -> @frigProps.type != "boolean"
  max:             undefined
  min:             undefined

  # Callbacks
  onChange:        undefined
  onSubmit:        undefined

  # DOM attributes + React ref + callbacks for the form element
  formHtml:
    ref:           -> @frigProps.formRef     # For Frig internal use only
    onSubmit:      -> @_frigOnSubmit         # For Frig internal use only
  # DOM attributes for the label element
  labelHtml:
    htmlFor:       -> @frigProps.fieldKey
  # DOM attributes + React ref + callbacks for the input element
  inputHtml:
    autoFocus:     -> @frigProps.autoFocus
    className:     -> @frigProps.className
    disabled:      -> @frigProps.disabled
    multiple:      -> @frigProps.multiple
    name:          -> @frigProps.fieldKey
    onChange:      -> @_frigOnChange         # For Frig internal use only
    onBlur:        -> @_frigOnBlur           # For Frig internal use only
    ref:           "input"                   # For Frig internal use only
  # The compiled list of validations to run (based on validation flags /\)
  validations: ->
    required:      @frigProps.required
    min:           @frigProps.min if @frigProps.min?
    max:           @frigProps.max if @frigProps.max?
