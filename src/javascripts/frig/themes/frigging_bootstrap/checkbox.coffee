friggingBootstrap = require "../frigging_bootstrap.coffee"
{errorList, sizeClassNames} = friggingBootstrap
{div, label, input}         = React.DOM
cx = React.addons.classSet

friggingBootstrap.Checkbox = React.createClass

  displayName: 'Frig.friggingBootstrap.Checkbox'

  mixins: [Frig.InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false

  getFriggingProps:  ->
    inputHtml:
      type: "checkbox"
      value: @frigProps.key
      checked: -> @frigProps.initialValue

  _cx: ->
    cx
      "checkbox": true
      "has-error": @state.errors?
      "has-success": @state.edited && !@state.errors?

  render: ->
    div className: cx(sizeClassNames @frigProps),
      div className: @_cx(),
        label @frigProps.labelHtml,
          input @frigProps.inputHtml
          " #{@frigProps.label}" if @frigProps.label
        errorList @state.errors if @state?.errors?
