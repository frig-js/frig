frigHelpers = require "./helpers.coffee"
typeMapping = require "./type_mapping.coffee"
{humanize, clone, merge, map, capitalize, guessType} = frigHelpers

# When in doubt add defaults in alphabetical order
# Defaults can depend on previous default values if they are
# defined after their dependencies.
module.exports = defaults =
  # For Frig internal use only
  children:              undefined
  fieldKey:              undefined
  formRef:               undefined
  onFriggingChildInit:   undefined
  onFriggingChildChange: undefined
  validationState:       undefined

  # Public settings
  data:            -> {}
  type:            undefined
  initialValue:    undefined
  title:           -> humanize @frigProps.fieldKey
  label:           -> @frigProps.title
  placeholder:     -> @frigProps.title
  htmlInputType:   -> Frig.typeMapping[@frigProps.type].htmlInputType
  options:         undefined
  layout:          undefined
  className:       undefined
  disabled:        undefined
  multiple:        undefined
  theme:           "friggingBootstrap"

  # Validation flags
  required:        -> @frigProps.type != "boolean"
  min:             undefined
  max:             undefined

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
    ref:           "input"                   # For Frig internal use only
    name:          -> @frigProps.fieldKey
    autoFocus:     -> @frigProps.autoFocus
    onChange:      -> @_frigOnChange         # For Frig internal use only
    onBlur:        -> @_frigOnBlur           # For Frig internal use only
    className:     -> @frigProps.className
    disabled:      -> @frigProps.disabled
    multiple:      -> @frigProps.multiple
  # The compiled list of validations to run (based on validation flags /\)
  validations: ->
    required:      @frigProps.required
    min:           @frigProps.min if @frigProps.min?
    max:           @frigProps.max if @frigProps.max?
