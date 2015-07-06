React                         = require "react/addons"
friggingBootstrap             = require "../frigging_bootstrap.coffee"
frigHelpers                   = require "../../helpers.coffee"
InputMixin                    = require "../../mixins/input_mixin.coffee"
{errorList, sizeClassNames}   = friggingBootstrap
{humanize, clone, merge, map} = frigHelpers
cx = React.addons.classSet

friggingBootstrap.Typeahead = React.createFactory React.createClass

  displayName: 'Frig.friggingBootstrap.Select'

  mixins: [InputMixin]

  getInitialState: ->
    errors: undefined
    edited: false
    selectedItems: []

  getFriggingProps: ->
    inputHtml:
      className: "form-control typeahead"
      defaultValue: -> @frigProps.initialValue
      placeholder:  -> @frigProps.placeholder
    labelHtml:
      className: ""

  componentDidMount: ->
    source = if @frigProps.options.length > -1
      @frigProps.options
    else
      @frigProps.options.execute
    options =
      source: source
      updater: @_afterSelect
      minLength: 0
      items: 5
      showHintOnFocus: true
    if @frigProps.addToListMessage
      options['addItem'] = name: @frigProps.addToListMessage
    if @frigProps.multiple
      options['afterSelect'] = @_clearTypeahead
    @_setInitialValue()
    @_$el().typeahead options

  _setInitialValue: ->
    if initialValue = @_$el().val()
      if @frigProps.multiple
        initialItems = @_multipleInitialItems initialValue
        @_clearTypeahead()
      else
        initialItems = [@_initalItem(initialValue)]
        @_$el().val initialItems[0].name if initialItems[0]
      @setState selectedItems: initialItems

  _multipleInitialItems: (initialValue) ->
    initialVals = initialValue.split ','
    if @frigProps.options.length > -1
      # if options is an array, find initialItems by their ids
      initialItems = _.filter @frigProps.options, (item) ->
        _.includes initialVals, item.id.toString()
      # remove used vals from typeahead options
      _.pull @frigProps.options, initialItems...
    else
      # if options is a function, initialItems must be passed in
      initialItems = @frigProps.initialItems
    initialItems

  _initalItem: (initialValue) ->
    _.find @frigProps.options, id: parseInt initialValue

  _$el: ->
    $ @refs[@frigProps.inputHtml.ref].getDOMNode()

  _afterSelect: (item) ->
    if @frigProps.addToListMessage and item.name == @frigProps.addToListMessage
      # post the item (create)
      @frigProps.addToList.execute @_$el().val(), (data, itemType) =>
        # callback should append (via _.partialRight) the model type
        # eg: 'sales_category'
        item = data[itemType]
        # add newly created item to typeahead options
        @frigProps.options.push item
        @_$el().val item.name
        @_addToSelectedItems item
    else
      @_addToSelectedItems item
    item

  _addToSelectedItems: (item) ->
    if @frigProps.multiple
      @setState selectedItems: @state.selectedItems.concat item
      _.pull @frigProps.options, item
    else
      @setState selectedItems: [item]
    setTimeout @frigProps.inputHtml.onChange, 0

  _clearTypeahead: ->
    @_$el().val ''

  getFriggingValue: ->
    if @frigProps.multiple
      _.map @state.selectedItems, 'id'
    else
      @state.selectedItems[0].id if @state.selectedItems[0]

  _cx: ->
    cx
      "form-group": true
      "has-error": @state.errors?
      "has-success": @state.edited && !@state.errors?
      "items": true

  _deleteItem: (item) ->
    @setState selectedItems: _.without @state.selectedItems, item
    @frigProps.options.push item if @frigProps.options.length > -1
    setTimeout @frigProps.inputHtml.onChange, 0

  render: ->
    div className: cx(sizeClassNames @props) + " typeahead",
      div className: "controls",
        label @frigProps.labelHtml, @frigProps.label if !@frigProps.multiple
        input @frigProps.inputHtml
        label @frigProps.labelHtml, @frigProps.label if @frigProps.multiple
      div className: @_cx(),
        if @frigProps.multiple
          _.map @state.selectedItems, (item) =>
            div className: "row",
              div className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                p className: 'pull-left', item.name
                i
                  className: "fa fa-times delete-trigger pull-right"
                  onClick: _.partial @_deleteItem, item
                  title: "Remove from list"
        if @state.selectedItems.length < 1 && @frigProps.multiple
          div className: "row",
            div className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
              p className: 'pull-left', "No " +
                @frigProps.label.toLowerCase() + "..."
        errorList @state.errors if @state?.errors?
