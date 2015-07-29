// var React                         = require("react/addons")
// var friggingBootstrap             = require("../frigging_bootstrap.js")
// var frigHelpers                   = require("../../helpers.js")
// var InputMixin                    = require("../../mixins/input_mixin.js")
// var {errorList, sizeClassNames}   = friggingBootstrap
// var {humanize, clone, merge, map} = frigHelpers
// var {div, label, textarea}        = React.DOM
// var cx = React.addons.classSet

// friggingBootstrap.Text = React.createClass({

//   displayName: "Frig.friggingBootstrap.Text",

//   mixins: [InputMixin],

//   getInitialState: function () {
//     return {
//       errors: undefined,
//       edited: false,
//     }
//   },

//   getFriggingProps: function () {
//     return {
//       inputHtml: {
//         className: "form-control",
//         placeholder: () => this.frigProps.placeholder,
//         defaultValue: () => this.frigProps.initialValue,
//         rows: 3,
//       },
//       labelHtml: {
//         className: "control-label",
//       },
//     }
//   },

//   _cx: function () {
//     return cx({
//       "form-group": true,
//       "has-error": this.state.errors != null,
//       "has-success": this.state.edited && this.state.errors == null,
//     })
//   },

//   _errorList: function() {
//     if (this.state.errors == null) return ""
//     return errorList(this.state.errors)
//   },

//   _label: function() {
//     if (this.frigProps.label == null) return ""
//     return label(this.frigProps.labelHtml, this.frigProps.label)
//   },

//   render: function() {
//     return div({className: cx(sizeClassNames(this.frigProps))},
//       div({className: this._cx()},
//         this._label(),
//         div({className: "controls"},
//           textarea(this.frigProps.inputHtml),
//         ),
//         this._errorList(),
//       ),
//     )
//   },

// })
