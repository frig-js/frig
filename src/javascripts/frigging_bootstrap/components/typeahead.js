// var React                         = require("react/addons")
// var friggingBootstrap             = require("../index.js")
// var frigHelpers                   = require("../../helpers.js")
// var InputMixin                    = require("../../mixins/input_mixin.js")
// var {errorList, sizeClassNames}   = friggingBootstrap
// var {humanize, clone, merge, map} = frigHelpers
// var cx = require("classnames")

// friggingBootstrap.Typeahead = React.createClass({

//   displayName: "Frig.friggingBootstrap.Select",

//   mixins: [InputMixin],

//   getInitialState: function() {
//     return {
//       errors: undefined,
//       edited: false,
//       selectedItems: [],
//     }
//   },

//   getFriggingProps: function() {
//     return {
//       inputHtml: {
//         className: "form-control typeahead",
//         defaultValue: function() {this.frigProps.initialValue},
//         placeholder: function() {this.frigProps.placeholder},
//       },
//       labelHtml: {
//         className: "",
//       },
//     }
//   },

//   componentDidMount: function() {
//     var source
//     if (this.frigProps.options.length > -1)
//     {
//       source = this.frigProps.options
//     }
//     else
//     {
//       source = this.frigProps.options.execute
//     }
//     var options = {
//       source: source,
//       updater: this._afterSelect,
//       minLength: 0,
//       items: 5,
//       showHintOnFocus: true,
//     }
//     if (this.frigProps.addToListMessage) {
//       options["addItem"] = {name: this.frigProps.addToListMessage}
//     }
//     if (this.frigProps.multiple) {
//       options["afterSelect"] = this._clearTypeahead
//     }
//     this._setInitialValue()
//     this._$el().typeahead(options)
//   },

//   _setInitialValue: function() {
//     if (initialValue = this._$el().val()) {
//       if (this.frigProps.multiple) {
//         initialItems = this._multipleInitialItems(initialValue)
//         this._clearTypeahead()
//       }
//       else {
//         initialItems = [this._initalItem(initialValue)]
//         if(initialItems[0]) this._$el().val(initialItems[0].name)
//       }
//       this.setState({selectedItems: initialItems})
//     }
//   },

//   _multipleInitialItems: function (initialValue) {
//     let initialVals = initialValue.split(",")
//     if (this.frigProps.options.length > -1) {
//       // if options is an array, find initialItems by their ids
//       let initialItems = _.filter(this.frigProps.options, (item) => {
//         return _.includes(initialVals, item.id.toString())
//       })
//       // remove used vals from typeahead options
//       _.pull(this.frigProps.options, ...initialItems)
//       return initialItems
//     }
//     else {
//       // if options is a function, initialItems must be passed in
//       return this.frigProps.initialItems
//     }
//   },

//   _initalItem: function (initialValue) {
//     return _.find(this.frigProps.options, {id: parseInt(initialValue)})
//   },

//   _$el: function() {
//     $(this.refs[this.frigProps.inputHtml.ref].getDOMNode())
//   },

//   _afterSelect: function (item) {
//     if (
//       this.frigProps.addToListMessage &&
//       item.name == this.frigProps.addToListMessage
//     ) {
//       // post the item (create)
//       this.frigProps.addToList.execute(this._$el().val(), (data, itemType) => {
//         // callback should append (via _.partialRight) the model type
//         // eg: "sales_category"
//         item = data[itemType]
//         // add newly created item to typeahead options
//         this.frigProps.options.push(item)
//         this._$el().val(item.name)
//         this._addToSelectedItems(item)
//       })
//     }
//     else {
//       this._addToSelectedItems(item)
//     }
//     return item
//   },

//   _addToSelectedItems: function (item) {
//     if (this.frigProps.multiple) {
//       this.setState({selectedItems: this.state.selectedItems.concat(item)})
//       _.pull(this.frigProps.options, item)
//     }
//     else {
//       this.setState({selectedItems: [item]})
//     }
//     setTimeout(this.frigProps.inputHtml.onChange, 0)
//   },

//   _clearTypeahead: function() {
//     this._$el().val("")
//   },

//   getFriggingValue: function() {
//     if (this.frigProps.multiple) {
//       return _.map(this.state.selectedItems, "id")
//     }
//     else if (this.state.selectedItems[0]) {
//       return this.state.selectedItems[0].id
//     }
//   },

//   _cx: function() {
//     return cx({
//       "form-group": true,
//       "has-error": this.state.errors != null,
//       "has-success": this.state.edited && this.state.errors == null,
//       "items": true,
//     })
//   },

//   _deleteItem: function (item) {
//     this.setState({
//       selectedItems: _.without(this.state.selectedItems, item)
//     })
//     if (this.frigProps.options.length > -1) {
//       this.frigProps.options.push(item)
//     }
//     setTimeout(this.frigProps.inputHtml.onChange, 0)
//   },

//   _input: function() {
//     if (this.frigProps.multiple) {
//       return [
//         label(this.frigProps.labelHtml, this.frigProps.label),
//         input(this.frigProps.inputHtml),
//       ]
//     }
//     else {
//       return [
//         input(this.frigProps.inputHtml),
//         label(this.frigProps.labelHtml, this.frigProps.label),
//       ]
//     }
//   },


//   _list: function() {
//     if (!this.frigProps.multiple) {
//       return ""
//     }
//     return _.map(this.state.selectedItems, (item) => {
//       return div({className: "row"},
//         div({className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
//           p({className: "pull-left"}, item.name),
//           i({
//             className: "fa fa-times delete-trigger pull-right",
//             onClick: _.partial(this._deleteItem, item),
//             title: "Remove from list",
//           }),
//         ),
//       )
//     })
//   },

//   _emptyList: function() {
//     if (this.state.selectedItems.length > 0 || !this.frigProps.multiple) {
//       return ""
//     }
//     return div({className: "row"},
//       div({className: "col-xs-12 col-sm-12 col-md-12 col-lg-12"},
//         p({className: "pull-left"},
//           `No ${this.frigProps.label.toLowerCase()}...`
//         ),
//       ),
//     )
//   },

//   _errorList: function() {
//     if (this.state.errors == null) return ""
//     return errorList(this.state.errors)
//   },

//   render: function() {
//     return div({className: cx(sizeClassNames(this.props)) + " typeahead"},
//       div({className: "controls"},
//         this._input()
//       ),
//       div({className: this._cx()},
//         this._list(),
//         this._errorList(),
//       ),
//     )
//   },

// })
