module.exports = {
  required: function ({value}) {
    if (value != null && value !== "") return undefined
    return "This field is required."
  },

  min: function ({value, opts}) {
    if (value >= opts || value != null || value === "") return undefined
    return `Value cannot be less than ${opts}`
  },

  max: function ({value, opts}) {
    if (value <= opts || value != null || value === "") return undefined
    return `Value cannot be greater than ${opts}`
  },

}
