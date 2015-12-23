let React = require("react")
let ReactDOM = require("react-dom")

/*
 * A higher order component that passes a focused attribute to it's child
 * component. The focused is true when the component should be focused
 * (ie. when it is clicked on or tabbed into) and false when it is not (ie.
 * initially, when it is clicked off of and when another input is selected).
 *
 * This is useful for implementing popups in Frig Themes.
 */
module.exports = function(componentClass) {
  let childName = componentClass.prototype.displayName

  return class extends React.Component {

    state = {
      focused: false,
    }

    displayName = `Frig.HigherOrderComponents.Focusable(${childName})`

    constructor() {
      super()
      this._onDocumentClick = this._onDocumentClick.bind(this)
      this._onFocus = this._onFocus.bind(this)
    }

    componentDidMount() {
      window.addEventListener("click", this._onDocumentClick)
      window.addEventListener("focus", this._onFocus, true)
    }

    componentWillUnmount() {
      window.removeEventListener("click", this._onDocumentClick)
      window.removeEventListener("focus", this._onFocus)
    }

    _onDocumentClick(e) {
      this.setState({focused: this._containsDOMElement(e.target)})
    }

    _onFocus() {
      this.setState({focused: this._containsDOMElement(document.activeElement)})
    }

    _containsDOMElement(otherElement) {
      let el = ReactDOM.findDOMNode(this)
      return el === otherElement || el.contains(otherElement)
    }

    render() {
      let childProps = Object.assign({}, this.props, {
        focused: this.state.focused,
      })
      return React.createElement(componentClass, childProps)
    }

  }
}
