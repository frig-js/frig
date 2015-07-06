React                         = require "react/addons"
FormBuilder                   = require "../form_builder.coffee"

module.exports = frigMixin =
  frig: (props, children) ->
    new FormBuilder(@, arguments...).render()
