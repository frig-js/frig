/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
// import Form from '../../src/components/form'
import { mount } from 'enzyme'
import higherOrderComponent from '../../src/higher_order_components/higher_order_component.js'

describe('higher order components', () => {
  @higherOrderComponent()
  class exampleHOC extends React.Component {
    render() {
      const ComponentClass = this.ComponentClass() // eslint-disable-line new-cap
      return (
        <div>
          <span className="before" />
          <ComponentClass ref="child" />
          <span className="after" />
          <span className={this.opts().decoratorParameter} />
        </div>
      )
    }
  }

  @exampleHOC({
    publicFunctions: [
      'examplePublicFunction1',
      'examplePublicFunction2',
    ],
    decoratorParameter: 'foobar',
  })
  class VanillaComponent extends React.Component { // eslint-disable-line react/no-multi-comp
    examplePublicFunction1() { return 1 }
    examplePublicFunction2() { return 2 }
    render() { return <p>vanilla</p> }
  }

  const wrapper = mount(<VanillaComponent />)
  const instance = wrapper.instance()

  it('passes through public functions', () => {
    expect(instance.examplePublicFunction1()).to.equal(1)
    expect(instance.examplePublicFunction2()).to.equal(2)
  })

  it('renders using the decorators render method', () => {
    expect(wrapper.find('.before')).to.have.length(1)
    expect(wrapper.find('.after')).to.have.length(1)
  })

  it('passes through decorator parameters', () => {
    expect(wrapper.find('.foobar')).to.have.length(1)
  })

  it('exposes the original class', () => {
    const originalClass = VanillaComponent.originalClass
    expect(originalClass).to.exist()
  })
})
