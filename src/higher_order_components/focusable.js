import React from 'react'
import ReactDOM from 'react-dom'

/*
 * A higher order component that passes a focused attribute to it's child
 * component. The focused is true when the component should be focused
 * (ie. when it is clicked on or tabbed into) and false when it is not (ie.
 * initially, when it is clicked off of and when another input is selected).
 *
 * This is useful for implementing popups in Frig Themes.
 */
module.exports = function Focusable(ComponentClass) {
  const childName = ComponentClass.prototype.displayName

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
      window.addEventListener('click', this._onDocumentClick)
      window.addEventListener('focus', this._onFocus, true)
    }

    componentWillUnmount() {
      window.removeEventListener('click', this._onDocumentClick)
      window.removeEventListener('focus', this._onFocus, true)
    }

    // Handles most cases of the user clicking in another field, or anywhere
    // outside the focusable element.
    _onDocumentClick(e) {
      console.log("_onDocumentClick fired")
      console.log("  e.target=", e.target)
      console.log("  this._containsDOMElement(e.target)=", this._containsDOMElement(e.target))
      this.setState({ focused: this._containsDOMElement(e.target) })
    }

    // Also cover the case where the user tabs out of a focusable element with
    // keyboard (since this wouldn't create a click event).
    _onFocus() {
      console.log("_onFocus fired")
      console.log("  document.activeElement=", document.activeElement)
      console.log("  this._containsDOMElement(document.activeElement)=", this._containsDOMElement(document.activeElement))
      this.setState({ focused: this._containsDOMElement(document.activeElement) })
    }

    _containsDOMElement(otherElement) {
      const el = ReactDOM.findDOMNode(this)
      return el === otherElement || el.contains(otherElement)
    }

    render() {
      const childProps = Object.assign({}, this.props, {
        focused: this.state.focused,
      })
      return <ComponentClass {...childProps} />
    }

  }
}
