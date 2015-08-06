// var React                         = require("react/addons")
// var friggingBootstrap             = require("../index.js")
// var InputMixin                    = require("frig/components/input_mixin")
// var {humanize, clone, merge, map} = require("frig/helpers")
// var {errorList, sizeClassNames}   = friggingBootstrap
// var {div, label, input, img}      = React.DOM
// var cx = require("classnames")

// friggingBootstrap.File = React.createClass({

//   displayName: "Frig.friggingBootstrap.FileInput",

//   mixins: [InputMixin],

//   getInitialState: function() {
//     return {
//       errors: undefined,
//       edited: false,
//     }
//   },

//   getFriggingProps: function() {
//     return {
//       // Bootstrap input addon texts
//       prefix:          undefined,
//       suffix:          undefined,
//       inputHtml: {
//         className: "form-control",
//         placeholder: function() {return this.frigProps.placeholder},
//         type: function() {return "file"},
//         accept: function() {return "image/png,image/gif,image/jpeg"},
//         defaultValue: function() {return this.frigProps.initialValue},
//       },
//     }
//   },

//   componentDidMount: function() {
//     this.setState({image: this.frigProps.initialValue})
//   },

//   _cx: function() {
//     return cx({
//       "has-error": this.state.errors != null,
//       "has-success": this.state.edited && this.state.errors == null,
//     })
//   },

//   _input: function() {
//     input(this.frigProps.inputHtml)
//   },

//   _loadFile: function() {
//     this.fReader = new FileReader()
//     this.fReader.onloadend = this._onFileLoad
//     var file = this.refs[this.frigProps.inputHtml.ref].getDOMNode().files[0]
//     this.fReader.readAsDataURL(file)
//   },

//   _onFileLoad: function() {
//     v = this.fReader.result.slice(0)
//     this.setState({image: v})
//     this.getFriggingValue = () => v
//     if (this.frigProps.onFriggingChildChange) {
//       this.frigProps.onFriggingChildChange("image", v, true)
//     }
//   },

//   _image: function() {
//     if (this.state.image == null) return ""
//     return img({
//       className: "thumbnail",
//       height: "125",
//       width: "125",
//       src: this.state.image,
//     })
//   },

//   _inputPrefix: function() {
//     if (this.frigProps.prefix == null) return ""
//     return div({className: "input-group-addon"}, this.frigProps.prefix)
//   },

//   _inputSuffix: function() {
//     if (this.frigProps.suffix == null) return ""
//     div({className: "input-group-addon"}, this.frigProps.suffix)
//   },

//   _inputGroup: function() {
//     if (this.frigProps.prefix || this.frigProps.suffix) {
//       return div({className: "input-group"},
//         this._inputPrefix(),
//         this._input(),
//         this._inputSuffix(),
//       )
//     }
//     else {
//       return this._input()
//     }
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
//     this.frigProps.inputHtml.onChange = this._loadFile
//     return div({className: cx(sizeClassNames(this.frigProps))},
//       div({className: this._cx()},
//         this._label(),
//         div({className: "controls"},
//           div({className: "image-upload"},
//             this._image(),
//             this._inputGroup(),
//           ),
//         ),
//         this._errorList(),
//       ),
//     )
//   },

// })
