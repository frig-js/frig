React                         = require "react/addons"
FormBuilder                   = require "../form_builder.coffee"

module.exports = frigMixin =
  frig: (props, children) ->
    isCoffeescript = !props.content?
    new FormBuilder(@, props, children, isCoffeescript).render()
