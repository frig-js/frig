var React                         = require("react/addons")
var friggingBootstrap             = require("../frigging_bootstrap.js")
var InputMixin                    = require("../../mixins/input_mixin.js")
var {humanize, clone, merge, map} = require("../../helpers.js")
var {errorList, sizeClassNames}   = friggingBootstrap
var {div, label, input, img}      = React.DOM
var cx = React.addons.classSet

friggingBootstrap.File = React.createClass({

  displayName: 'Frig.friggingBootstrap.FileInput',

  mixins: [InputMixin],

  getInitialState: function() {
    return {
      errors: undefined,
      edited: false,
    }
  },

  getFriggingProps: function() {
    return {
      # Bootstrap input addon texts
      prefix:          undefined,
      suffix:          undefined,
      inputHtml: {
        className: "form-control",
        placeholder: function() {return this.frigProps.placeholder},
        type: function() {return 'file'},
        accept: function() {return 'image/png,image/gif,image/jpeg'},
        defaultValue: function() {return this.frigProps.initialValue},
      },
    }
  },

  componentDidMount: function() {
    this.setState(image: this.frigProps.initialValue)
  },

  _cx: function() {
    return cx({
      "has-error": this.state.errors != undefined,
      "has-success": this.state.edited && this.state.errors == undefined,
    })
  },

  _input: function() {
    input(this.frigProps.inputHtml)
  },

  _loadFile: function() {
    this.fReader = new FileReader()
    this.fReader.onloadend = this._onFileLoad
    var file = this.refs[this.frigProps.inputHtml.ref].getDOMNode().files[0]
    this.fReader.readAsDataURL(file)
  },

  _onFileLoad: function() {
    v = this.fReader.result[0..-1]
    this.setState({image: v})
    this.getFriggingValue = () => {return v}
    if (this.frigProps.onFriggingChildChange) {
      this.frigProps.onFriggingChildChange('image', v, true)
    }
  },

  _image: function() {
    if (this.state.image == undefined) return ""
    return img({
      className: "thumbnail",
      height: "125",
      width: "125",
      src: this.state.image,
    })
  },

  _inputPrefix: function() {
    if (this.frigProps.prefix == undefined) return ""
    return div({className: "input-group-addon"}, this.frigProps.prefix)
  },

  _inputSuffix: function() {
    if (this.frigProps.suffix == undefined) return ""
    div({className: "input-group-addon"}, this.frigProps.suffix)
  },

  _inputGroup: function() {
    if (this.frigProps.prefix || this.frigProps.suffix) {
      return div({className: "input-group"},
        this._inputPrefix(),
        this._input(),
        this._inputSuffix(),
      )
    }
    else {
      return this._input()
    }
  },

  _errorList: function() {
    return "" if (this.state.errors == undefined)
    return errorList(this.state.errors)
  },

  _label: function() {
    return "" if this.frigProps.label == undefined
    return label(this.frigProps.labelHtml, this.frigProps.label)
  },

  render: function() {
    this.frigProps.inputHtml.onChange = this._loadFile
    return div({className: cx(sizeClassNames this.frigProps)},
      div({className: this._cx()},
        this._label()
        div({className: "controls"},
          div({className: "image-upload"},
            this._image(),
            this._inputGroup(),
          ),
        ),
        @_errorList(),
      ),
    ),
  },

}