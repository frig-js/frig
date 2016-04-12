module.exports = {
  required(props) {
    const { value } = props.valueLink
    // if there is a null option then null is a valid value and there are not
    // any values for which required should return an error
    if ((props.options || []).filter((o) => o.value == null).length > 0) {
      return undefined
    }
    if (value != null && value !== '') return undefined
    return 'This field is required.'
  },

  min(props, opts) {
    const { value } = props.valueLink
    if (value >= opts || value == null || value === '') return undefined
    return `Value cannot be less than ${opts}`
  },

  max(props, opts) {
    const { value } = props.valueLink
    if (value <= opts || value == null || value === '') return undefined
    return `Value cannot be greater than ${opts}`
  },
}
