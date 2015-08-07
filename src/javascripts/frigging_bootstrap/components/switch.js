var React                                    = require("react")
var cx                                       = require("classnames")

var {errorList, sizeClassNames, formGroupCx} = require("../util.js")

var {div, span, label, input}                = React.DOM

/*
 * Example 1) Using a switch for one input:
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex1", data: data ->
 *     f.input "allIsWell", template: "switch"

 * Example 2) Using switches as the default for all boolean inputs in a form:
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex2", data: data, typeMapping: {boolean: "switch"}, ->
 *     f.input "allisWell"

 * Example 3) Using switches as the default for all boolean inputs in all forms:
 *
 *   Frig.typeMapping.boolean.template = "switch"
 *
 *   data = allIsWell: true
 *
 *   this.frig ref: "ex2", data: data, ->
 *     f.input "allisWell"

 * This optional add-on component depends on BootstrapSwitch and jQuery
*/

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Switch"

  static defaultProps = Object.assign(require("../default_props.js"), {
    handleWidth:     undefined,
    offColor:        undefined,
    offText:         undefined,
    offValue:        false,
    onColor:         "success",
    onText:          undefined,
    onValue:         true,
  })

  constructor(props) {
    super(props)

    this.state = {
      errors: undefined,
    }
  }

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className:     "switch",
      type:          "checkbox",
      size: "small",
      state: this._getBooleanVal(),
      disabled: this.props.disabled,
      handleWidth: this.props.handleWidth,
      offColor: this.props.offColor,
      onColor: this.props.onColor,
      offText: this.props.offText,
      onText: this.props.onText,
      onSwitchChange: this._onSwitchChange,
    })
  }

  _getBooleanVal() {
    if (this._booleanVal == null) {
      this._booleanVal = this.props.onValue === this.props.initialValue
    }

    return this._booleanVal
  }

  getFriggingValue() {
    // boolean value is undefined on initial page load, so value defaults to
    // false
    return this.props[this._getBooleanVal() ? "onValue" : "offValue"]
  }

  _getSwitchProps() {
    console.log(this)
    console.log(this.refs[this.props.inputHtml.ref].getDOMNode())
    return this.refs[this.props.inputHtml.ref].getDOMNode()
  }

  _onSwitchChange (e, val) {
    this._booleanVal = val
    this._getSwitchProps().val(this.getFriggingValue())
    this.props.inputHtml.onChange()
  }

  _labelContainerCx() {
    return cx({
      "pull-left": this.props.layout === "horizontal",
    })
  }

  _inputContainerCx() {
    return cx({
      "pull-right": this.props.layout === "horizontal",
      "controls": this.props.layout === "vertical",
    })
  }

  _label() {
    if (this.props.label === null) return ""
    return label(this.props.labelHtml, this.props.label)
  }

  _errorList() {
    if (this.state.errors === null) return ""
    return errorList(this.state.errors)
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: this._labelContainerCx()},
        this._label(),
      ),
      div({className: this._inputContainerCx()},
        input(this._inputHtml()),
        this._errorList(),
      ),
    )
  }

}
