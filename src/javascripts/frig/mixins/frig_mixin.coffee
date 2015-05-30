FormBuilder = require "../form_builder"

module.exports = frigMixin =
  mixins: [React.addons.LinkedStateMixin]
  frig: (props, children) ->
    new FormBuilder(@, arguments...).render()
