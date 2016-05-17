/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Boolean from '../../src/higher_order_components/boolean.js'

const noop = () => {}

describe('Boolean Higher Order Component', () => {
  @Boolean
  // eslint-disable-next-line react/prefer-stateless-function
  class VanillaComponent extends React.Component {
    static propTypes = {
      value: React.PropTypes.any.isRequired,
      onChange: React.PropTypes.func.isRequired,
    }
    render() {
      return <p>{this.props.value ? 1 : 0}</p>
    }
  }

  const testBooleanHOC = (props, expected) => {
    const wrapper = mount(<VanillaComponent {...props} onChange={noop} />)
    const vanilla = wrapper.find(VanillaComponent)
    expect(vanilla.text()).to.match(expected)
  }

  describe('without onValue / offValue', () => {
    it('value is null return false', () => {
      testBooleanHOC({ value: null }, /0/)
    })

    it('when value=true passes true to child component', () => {
      testBooleanHOC({ value: true }, /1/)
    })

    it('when value=false passes false to child component', () => {
      testBooleanHOC({ value: false }, /0/)
    })
  })

  describe('with onValue / offValue', () => {
    const vanillaValues = { onValue: 'yes', offValue: 'no' }

    it('when value=true passes true to child component', () => {
      testBooleanHOC({
        ...vanillaValues,
        value: 'yes',
      }, /1/)
    })

    it('when value=false passes false to child component', () => {
      testBooleanHOC({
        ...vanillaValues,
        value: 'no',
      }, /0/)
    })
  })

  describe('componentWillReceiveProps', () => {
    it('when child component updates, update boolean hoc value', () => {
      const wrapper = mount(<VanillaComponent value={false} onChange={noop} />)
      const vanilla = wrapper.find(VanillaComponent)
      expect(vanilla.text()).to.match(/0/)
      wrapper.setProps({ value: true })
      expect(vanilla.text()).to.match(/1/)
    })
  })
})
