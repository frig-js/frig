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
      <span className="before" />
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

describe('@focusable decorator', () => {
  const dom = jsdom('<html><div id="app"></div></html>')
  usingJsdom(dom, () => {
    ReactDOM.render(<Layout />, dom.getElementById('app'))

    const app = dom.getElementById('app')
    const input = dom.querySelectorAll('.theInput')[0]

    it('initially renders child component with props.focused=false', () => {
      expect(app.textContent).to.equal('')
    })

    it('sets props.focused=true on child component when it is clicked', () => {
      input.click()
      expect(app.textContent).to.equal('Focused!')
    })
  })
})
