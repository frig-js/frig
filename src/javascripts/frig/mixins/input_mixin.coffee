React                         = require "react/addons"
friggingPropsMixin            = require "./frigging_props_mixin.coffee"
frigHelpers                   = require "../helpers.coffee"
{humanize, clone, merge, map, mapObj, isConfigObj, setDefaults} = frigHelpers

module.exports = inputMixin =

  mixins: [
    friggingPropsMixin
  ]

  componentWillMount: ->
    @getFriggingValue ||= @defaultGetFriggingValue

  componentDidMount: ->
    val = @getFriggingValue()
    valid = @validate(val, false)
    @frigProps.onFriggingChildInit?(@frigProps.fieldKey, val, valid)

  defaultGetFriggingValue: ->
    ref = @refs[@frigProps.inputHtml.ref]
    val = if ref?
      el = ref.getDOMNode()
      if el.type == 'checkbox'
        el.checked
      else if el.type == 'select-multiple'
        # TODO: DO NOT USE JQUERY IN FRIG!
        $(el).val()
      else
        el.value
    else
      @frigProps.initialValue
    # The value is cast to a string when we get it from DOM.value. Lookup
    # the original value in the options list and return that instead.
    if @frigProps.options?
      for option in @frigProps.options
        option = @normalizeFriggingOption(option)
        return option.value if option.value.toString() == val
    return val

  normalizeFriggingOption: (opts) ->
    return undefined unless opts?
    # converting opts in the format of [key] to key
    opts = opts[0] if typeof(opts) == "object" and opts.length == 1
    # if opts is in the format [key, value]
    if typeof(opts) == "object" and opts.length == 2
      value: opts[0]
      label: opts[1]
    # if opts is in the format key
    else
      value: opts
      label: opts

  validate: (value = @getFriggingValue(), renderErrors = true) ->
    if @frigProps.type == "submit" || @frigProps.validate?() == false
      @setState errors: undefined
      return true
    errors = []
    # Running each validation
    for k, validationOpts of @frigProps.validations
      continue if validationOpts == false or !validationOpts?
      opts =
        data:       @frigProps.data
        fieldkey:   @frigProps.fieldKey
        value:      value
        opts:       validationOpts
      errors = errors.concat Frig.validation[k](opts) || []
    # If there are no errors then errors should be falsie
    errors = undefined if errors.length == 0
    # Adding the errors to the state
    @setState errors: errors if renderErrors
    # Return true if there are no errors
    return !errors?

  _frigOnChange: ->
    return if @frigProps.type == "submit"
    value = @getFriggingValue()
    valid = @validate value
    # Call the form-level user specified onChange function
    @frigProps.onFriggingChildChange?(@frigProps.fieldKey, value, valid)
    # Call the user specified onChange function
    @frigProps.onChange?(value, valid)

  _frigOnBlur: ->
    @validate()
