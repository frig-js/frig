React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
InputMixin                    = require "../../mixins/input_mixin.coffee"
{humanize, clone, merge, map} = require "../../helpers.coffee"
{errorList, sizeClassNames}   = friggingBootstrap
{div, label, input, img}      = React.DOM
cx = React.addons.classSet

friggingBootstrap.File = React.createClass

  displayName: 'Frig.friggingBootstrap.FileInput'

  mixins: [InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false

  getFriggingProps: ->
    # Bootstrap input addon texts
    prefix:          undefined
    suffix:          undefined
    inputHtml:
      className: "form-control"
      placeholder: -> @frigProps.placeholder
      type: -> 'file'
      accept: -> 'image/png,image/gif,image/jpeg'
      defaultValue: -> @frigProps.initialValue

  componentDidMount: ->
    @setState image: @frigProps.initialValue

  _cx: ->
    cx
      "has-error": @state.errors?
      "has-success": @state.edited && !@state.errors?

  _input: ->
    input @frigProps.inputHtml

  _loadFile: ->
    @fReader = new FileReader()
    @fReader.onloadend = @_onFileLoad
    @fReader.readAsDataURL @refs[@frigProps.inputHtml.ref].getDOMNode().files[0]

  _onFileLoad: ->
    v = _.clone @fReader.result
    @setState image: v
    @getFriggingValue = => v
    @frigProps.onFriggingChildChange? 'image', v, true

  render: ->
    @frigProps.inputHtml.onChange = @_loadFile
    div className: cx(sizeClassNames @frigProps),
      div className: @_cx(),
        label @frigProps.labelHtml, @frigProps.label if @frigProps.label
        div className: "controls",
          div className: "image-upload",
            if @state.image
              img
                className: "thumbnail",
                height: '125', width: '125',
                src: @state.image
            if @frigProps.prefix? || @frigProps.suffix?
              div className: "input-group",
                if @frigProps.prefix
                  div className: "input-group-addon", @frigProps.prefix
                @_input()
                if @frigProps.suffix
                  div className: "input-group-addon", @frigProps.suffix
            else
              @_input()
        errorList @state.errors if @state?.errors?
