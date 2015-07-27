var React                         = require("react/addons")
var friggingPropsMixin            = require("./frigging_props_mixin.coffee")
var frigHelpers                   = require("../helpers.coffee")
var frigValidations               = require("../validations.coffee")
var {humanize, clone, merge, map, mapObj, isConfigObj, setDefaults} = frigHelpers

module.exports = inputMixin = {

  mixins: [
    friggingPropsMixin,
  ],

  componentWillMount: function() {
    this.getFriggingValue ||= this.defaultGetFriggingValue
  },

  componentDidMount: function() {
    var val = this.getFriggingValue()
    var valid = this.validate(val, false)
    if (this.frigProps.onFriggingChildInit) {
      this.frigProps.onFriggingChildInit(this.frigProps.fieldKey, val, valid)
    }
  },

  defaultGetFriggingValue: function() {
    var ref = this.refs[this.frigProps.inputHtml.ref]
    var val
    if (ref == undefined) {
      val = this.frigProps.initialValue
    }
    else {
      el = ref.getDOMNode()
      if (el.type == 'checkbox') {
        val = el.checked
      }
      else if (el.type == 'select-multiple')
      {
        # TODO: DO NOT USE JQUERY IN FRIG!
        val = $(el).val()
      }
      else
      {
        val = el.value
      }
    }
    # The value is cast to a string when we get it from DOM.value. Lookup
    # the original value in the options list and return that instead.
    if (this.frigProps.options != undefined) {
      for (option in this.frigProps.options) {
        option = this.normalizeFriggingOption(option)
        if (option.value.toString() == val) return option.value
      }
    }
    return val
  },

  normalizeFriggingOption: function (opts) {
    if (opts == undefined) return undefined
    # converting opts in the format of [key] to key
    if (typeof(opts) == "object" && opts.length == 1) opts = opts[0]
    # if opts is in the format [key, value]
    if (typeof(opts) == "object" && opts.length == 2) {
      {
        value: opts[0],
        label: opts[1],
      }
    }
    # if opts is in the format key
    else
      {
        value: opts,
        label: opts,
      }
  },

  validate: function (value = this.getFriggingValue(), renderErrors = true) {
    if (this.frigProps.type == "submit" || this.frigProps.validate?() == false) {
      this.setState(errors: undefined)
      return true
    }
    var errors = []
    # Running each validation
    for (k, validationOpts of this.frigProps.validations) {
      if (validationOpts == false || validationOpts == undefined) continue
      opts = {
        data:       this.frigProps.data,
        fieldkey:   this.frigProps.fieldKey,
        value:      value,
        opts:       validationOpts,
      }
      errors = errors.concat(frigValidations[k](opts) || [])
    }
    # If there are no errors then errors should be falsie
    if (errors.length == 0) errors = undefined
    # Adding the errors to the state
    if (renderErrors) this.setState({errors: errors})
    # Return true if there are no errors
    return errors == undefined
  },

  _frigOnChange: function() {
    if (this.frigProps.type == "submit") return
    var value = this.getFriggingValue()
    var valid = this.validate value
    # Call the form-level user specified onChange function
    if (this.frigProps.onFriggingChildChange) {
      this.frigProps.onFriggingChildChange(this.frigProps.fieldKey, value, valid)
    }
    # Call the user specified onChange function
    if (this.frigProps.onChange) {
      this.frigProps.onChange(value, valid)
    }
  },

  _frigOnBlur: function() {
    this.validate()
  },

}