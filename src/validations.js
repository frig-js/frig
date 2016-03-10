module.exports = {
  required: function (props) {
    let {value} = props.valueLink
    // if there is a null option then null is a valid value and there are not
    // any values for which required should return an error
    if ((props.options || []).filter((o) => o.value == null).length > 0) {
      return undefined
    }
    if (!value) return undefined
    return 'This field is required.'
  },

  min: function (props, opts) {
    let {value} = props.valueLink
    if (value >= opts || !value) return undefined
    return `Value cannot be less than ${opts}`
  },

  max: function (props, opts) {
    let {value} = props.valueLink
    if (value <= opts || !value) return undefined
    return `Value cannot be greater than ${opts}`
  },
}
