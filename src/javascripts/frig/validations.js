module.exports = validation = {
  required: function ({key, value, opts, data}) {
    if (value? && value != "") return undefined
    return "This field is required."
  },

  min: function ({key, value, opts, data}) {
    if (value >= opts || !value? || value == "") return undefined
    return "Value cannot be less than #{opts}"
  },

  max: function ({key, value, opts, data}) {
    if (value <= opts || !value? || value == "") return undefined
    return "Value cannot be greater than #{opts}"
  }

}