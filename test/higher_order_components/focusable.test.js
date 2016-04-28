/* global describe, it, beforeEach */

import { jsdom } from 'jsdom'
import { usingJsdom } from '../test_helper'

import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
// import Form from '../../src/components/form'
import { mount } from 'enzyme'
import focusable from '../../src/higher_order_components/focusable.js'

class Layout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div>
      <span className="before" tabIndex="1" />
      <ExampleFocusable className="focusable" />
      <span className="after" />
    </div>)
  }
}

@focusable
class ExampleFocusable extends React.Component { // eslint-disable-line react/no-multi-comp
  static propTypes = {
    focused: React.PropTypes.boolean,
  }
  render() {
    return (
      <div className="theDiv">
        <input ref="input" className="theInput" />
        {this.props.focused && <p>Focused!</p>}
      </div>
    )
  }
}

const sendFocusEvent = (el) => {
  // .focus() only sets document.activeElement.
  // We also need to dispatch the event.
  el.focus()
  el.dispatchEvent(new Event('focus'))
}

describe('@focusable decorator', () => {
  // Note: Because this test uses `usingJsdom`, it executes as a single
  // test with multiple assertions. `usingJsdom` cannot be used in a
  // describe block, since it mutates globals, and tests execute at a
  // different time.

  it('toggles props.focused when child component is clicked/focused/blurred', () => {
    const dom = jsdom('<html><div id="app"></div></html>')

    usingJsdom(dom, () => {
      ReactDOM.render(<Layout />, dom.getElementById('app'))

      const app = dom.getElementById('app')
      const input = dom.querySelectorAll('.theInput')[0]
      const span = dom.querySelectorAll('.before')[0]

      expect(app.textContent).to.equal('',
        'initially renders child component with props.focused=false')

      // click inside the Focusable
      input.click()
      expect(app.textContent).to.equal('Focused!',
        'sets props.focused=true on child component when it is clicked')

      // click outside the Focusable
      span.click()
      expect(app.textContent).to.equal('',
        'sets props.focused=false on child component when another element is clicked')

      // focus inside the Focusable
      sendFocusEvent(input)
      expect(app.textContent).to.equal('Focused!',
         'sets props.focused=true on child component when it is focused')


      // focus outside the Focusable
      sendFocusEvent(span)
      expect(app.textContent).to.equal('',
        'sets props.focused=false on child component when another element is focused')
    })
  })
})
