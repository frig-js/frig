{humanize, clone, merge, map, capitalize, guessType} = Frig.helpers

module.exports = defaults =
  # For Frig internal use only
  children:              undefined
  fieldKey:              undefined
  formRef:               undefined
  validationState:       undefined
  onFriggingChildInit:   undefined
  onFriggingChildChange: undefined

  # Public settings
  data:            -> {}
  type:            undefined
  initialValue:    undefined
  title:           -> humanize @frigProps.fieldKey
  label:           -> @frigProps.title
  placeholder:     -> @frigProps.title
  htmlInputType:   -> Frig.typeMapping[@frigProps.type].htmlInputType
  options:         undefined
  className:       undefined
  layout:          undefined
  disabled:        undefined
  multiple:        undefined
  type:            undefined

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
    name:          -> @frigProps.fieldKey
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
