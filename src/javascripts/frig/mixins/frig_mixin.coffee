FormBuilder = require "../form_builder.coffee"

module.exports = frigMixin =
  mixins: [React.addons.LinkedStateMixin]
  frig: (props, children) ->
    new FormBuilder(@, arguments...).render()
