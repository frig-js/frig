friggingPropsMixin = require "./frigging_props_mixin"
dslMixin           = require "./dsl_mixin"
frigHelpers        = require "../helpers"
{merge, map, capitalize, getTemplate, guessType, setDefaults} = frigHelpers

module.exports = formMixin =

  mixins: [
    friggingPropsMixin
    dslMixin
  ]

  componentWillMount: ->
    @_frigChanges = {}
    @_frigFormData = {}

  friggingChildren: ->
    @props.cb @frigDSL()

  validate: ->
    valid = true
    for key, input of @refs
      valid &= input.validate() if key.match(/Input$/)? and input.validate?
    return valid

  getData: ->
    @_frigFormData

  initialValues: ->
    # If the data is a ReactLink extract its value
    if @frigProps.data.requestChange?
      @frigProps.data.value
    else
      @frigProps.data

  _onFriggingChildInit: (k, v) ->
    @_frigFormData[k] = v

  _onFriggingChildChange: (k, v, valid) ->
    @_frigFormData[k] = v
    # Update the ReactLink with the merged combination of form data and the
    # initial values passed in to the form (allowing non-form data to be
    # persisted)
    reactLinkData = merge {}, @initialValues(), @_frigFormData
    @frigProps.data.requestChange?(reactLinkData)
    # clone the form data object to avoid the situation where subsequent form
    # updates unexpectedly mutate the data object
    @frigProps.onChange?(_.clone(@_frigFormData), valid)

  _frigOnSubmit: (e) ->
    e.preventDefault()
    return unless @validate()
    @frigProps.onSubmit?(e, @_frigFormData)
