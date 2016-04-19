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
    const wrapper = render(<Layout />)
    throw wrapper.find('input')
  })

})
