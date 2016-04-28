/* global describe, it, beforeEach */

import { jsdom } from 'jsdom'
import { usingJsdom } from '../test_helper'

import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
// import Form from '../../src/components/form'
import { mount } from 'enzyme'
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

  it('initially is not focused', () => {
    const wrapper = mount(<Layout />)
    const example = wrapper.find(ExampleFocusable)
    expect(example).to.have.length(1)
    expect(example.prop('focused')).to.not.exist()
  })

  it('sets props.focused on child component when it is clicked', () => {
    const dom = jsdom('<html><div id="app"></div></html>')
    usingJsdom(dom, () => {
      ReactDOM.render(<Layout />, dom.getElementById('app'))

      const app = dom.getElementById('app')
      expect(app.textContent).to.equal('')

      const input = dom.querySelectorAll('.theInput')[0]
      input.click()

      expect(app.textContent).to.equal('Focused!')
    })
  })
})
