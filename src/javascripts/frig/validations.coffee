module.exports = validation =
  required: ({key, value, opts, data}) ->
    return undefined if value? and value != ""
    "This field is required."

  min: ({key, value, opts, data}) ->
    return undefined if value >= opts or !value? or value == ""
    "Value cannot be less than #{opts}"

  max: ({key, value, opts, data}) ->
    return undefined if value <= opts or !value? or value == ""
    "Value cannot be greater than #{opts}"
