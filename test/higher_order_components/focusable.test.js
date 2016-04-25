/* global describe, it, beforeEach */

import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
// import Form from '../../src/components/form'
import { mount, render } from 'enzyme'
import focusable from '../../src/higher_order_components/focusable.js'

describe('higher order components', () => {
  class Layout extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (<div>
        <span className="before" />
        <ExampleFocusable className="focusable" />
        <span className="after" />
      </div>)
    }
  }

  @focusable
  class ExampleFocusable extends React.Component {
    static propTypes = {
      focused: React.PropTypes.boolean,
    }
    render() {
      if (this.props.focused) {
        return <div><input ref="input" className="theInput" /><p>Focused!</p></div>
      }

      return <div><input ref="input" className="theInput" /></div>
    }
  }

  it('initially is not focused', () => {
    const wrapper = mount(<Layout />)
    const example = wrapper.find(ExampleFocusable)
    expect(example).to.have.length(1)
    expect(example.prop('focused')).to.not.exist()
  })

  it('when focusable element is clicked, props.focusable=true', () => {
    const wrapper = mount(<Layout />)
    const example = wrapper.find(ExampleFocusable)
    expect(example.prop('focused')).not.to.exist()

    const reactElement = wrapper.get(0)
    const domNode = ReactDOM.findDOMNode(reactElement)

    // Finally figured out how to get the HTMLInputElement!
    const input = domNode.querySelectorAll('input')[0]

    window.addEventListener('abc', function (ev) {
      console.log('window click', ev.target.constructor.name,
                  ev.currentTarget.constructor.name);
    });

    document.addEventListener('abc', function (ev) {
      console.log('document click', ev.target.constructor.name,
                  ev.currentTarget.constructor.name);
    });

    input.addEventListener('abc', function (ev) {
      console.log('input click', ev.target.constructor.name,
                  ev.currentTarget.constructor.name);
    });

    // console.log(window)

    const event = new Event('abc', { bubbles: true, cancelable: false })
    input.dispatchEvent(event)

    // input.click()

    // throw new Error("EOF")

    // const event = new Event('click')
    // const succeeded = input.dispatchEvent(event)
    // throw new Error("EOF")


    //
    // throw new Error(cancelled)

    // // Nice try, but no cigar.
    // input.click()
    //
    // // Here is some frail attempt to force React to re-render.
    // wrapper.setState({ 'bogus': 'rerender' })
    //
    // // It doesn't matter.
    // // The _onDocumentClick event on focusable never fires.
    // // Thought now is to use window.dispatchEvent to handle this.
    //
    expect(example.prop('focused')).to.be.true()

  })

})
