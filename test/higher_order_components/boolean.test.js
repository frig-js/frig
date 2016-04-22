/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Boolean from '../../src/higher_order_components/boolean.js'

describe('Boolean Higher Order Component', () => {
  @Boolean
  // eslint-disable-next-line react/prefer-stateless-function
  class VanillaComponent extends React.Component {
    static propTypes = {
      valueLink: React.PropTypes.shape({
        value: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number,
          React.PropTypes.bool,
        ]),
        requestChange: React.PropTypes.func,
      }),
    }
    render() {
      return <p>{this.props.valueLink.value ? 1 : 0}</p>
    }
  }

  const valueLink = (value) => ({ value, requestChange: () => {} })
  const testBooleanHOC = (props, expected) => {
    const wrapper = mount(<VanillaComponent {...props} />)
    const vanilla = wrapper.find(VanillaComponent)
    expect(vanilla.text()).to.match(expected)
  }

  describe('without onValue / offValue', () => {
    it('value is null return false', () => {
      testBooleanHOC({ valueLink: valueLink(null) }, /0/)
    })

    it('when value=true passes true to child component', () => {
      testBooleanHOC({ valueLink: valueLink(true) }, /1/)
    })

    it('when value=false passes false to child component', () => {
      testBooleanHOC({ valueLink: valueLink(false) }, /0/)
    })
  })

  describe('with onValue / offValue', () => {
    const vanillaValues = { onValue: 'yes', offValue: 'no' }

    it('when value=true passes true to child component', () => {
      testBooleanHOC({
        ...vanillaValues,
        valueLink: valueLink('yes'),
      }, /1/)
    })

    it('when value=false passes false to child component', () => {
      testBooleanHOC({
        ...vanillaValues,
        valueLink: valueLink('no'),
      }, /0/)
    })
  })

  describe('componentWillReceiveProps', () => {
    it('when child component updates, update boolean hoc value', () => {
      const wrapper = mount(<VanillaComponent valueLink={valueLink(false)} />)
      const vanilla = wrapper.find(VanillaComponent)
      expect(vanilla.text()).to.match(/0/)
      wrapper.setProps({ valueLink: valueLink(true) })
      expect(vanilla.text()).to.match(/1/)
    })
  })
})
