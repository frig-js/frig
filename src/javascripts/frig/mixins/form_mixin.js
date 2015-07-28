var React                         = require("react/addons")
var friggingPropsMixin            = require("./frigging_props_mixin.js")
var dslMixin                      = require("./dsl_mixin.js")
var frigHelpers                   = require("../helpers.js")
var {merge, map, capitalize, getTemplate, guessType, setDefaults} = frigHelpers

module.exports = formMixin = {

  mixins: [
    friggingPropsMixin,
    dslMixin,
  ],

  componentWillMount: function() {
    this._frigChanges = {}
    this._frigFormData = {}
    this._frigValidFormData = {}
  },

  friggingChildren: function() {
    return this.props.cb(this.frigDSL())
  },

  validate: function() {
    var valid = true
    for (key, input of this.refs) {
      if (key.match(/Input$/) != undefined && input.validate != undefined) {
        valid &= input.validate()
      }
    }
    return valid
  },

  getData: function() {
    return this._frigFormData
  },

  getValidData: function() {
    return this._frigValidFormData
  },

  initialValues: function() {
    # If the data is a ReactLink extract its value
    if (this.frigProps.data.requestChange != undefined) {
      this.frigProps.data.value
    }
    else {
      this.frigProps.data
    }
  },

  _onFriggingChildInit: function(k, v, valid) {
    this._frigFormData[k] = v
    this._frigValidFormData[k] = v
  },

  _onFriggingChildChange: function(k, v, valid) {
    this._frigFormData[k] = v
    if (valid) {
      this._frigValidFormData[k] = v
    }
    else
    {
      delete this._frigValidFormData[k]
    }
    # clone the form data object to avoid the situation where subsequent form
    # updates unexpectedly mutate the data object
    if (this.frigProps.onChange) this.frigProps.onChange(this._frigFormData)
    if (valid)
    {
      if (this.frigProps.onValidChange) {
        this.frigProps.onValidChange(this._frigFormData)
      }
    }
    # Update the ReactLink with the merged combination of form data and the
    # initial values passed in to the form (allowing non-form data to be
    # persisted)
    reactLinkData = merge({}, this.initialValues(), this._frigFormData)
    if (this.frigProps.data.requestChange) {
      this.frigProps.data.requestChange(reactLinkData)
    }
  },

  _frigOnSubmit: function(e) {
    e.preventDefault()
    if (!this.validate()) return
    if (this.frigProps.onSubmit) {
      this.frigProps.onSubmit(e, this._frigFormData)
    }
  },

}