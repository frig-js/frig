/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import UnboundInput from '../../src/components/unbound_input'
import { mount } from 'enzyme'
// import td from 'testdouble'

const Stub = () => <div />
const defaultContext = {
  frigForm: {
    theme: {
      Input: Stub,
    },
    layout: 'some_layout',
    align: 'some_align',
  },
}

const defaultChildContextTypes = {
  frigForm: React.PropTypes.object.isRequired,
}

const defaultProps = {
  name: 'some_unbound_input',
  type: 'string',
}


describe('<UnboundInput />', () => {
  const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }
  const UndecoratedUnboundInput = UnboundInput.originalClass
  const wrapper = mount(<UndecoratedUnboundInput {...defaultProps} />, opts)
  const instance = wrapper.instance()

  it('isValid() returns true when errors is empty', () => {
    expect(instance.isValid()).to.be.true()
  })

  it('isModified() returns state.modified', () => {
    expect(instance.isModified()).to.be.false()
    instance.setState({ modified: true })
    expect(instance.isModified()).to.be.true()
  })

  it('resetModified() sets state.modified to false', () => {
    wrapper.setState({ modified: true })
    instance.resetModified()
    expect(instance.isModified()).to.be.false()
  })

  it('reset() sets modified/validationRequested to false', () => {
    wrapper.setState({ modified: true, validationRequested: true })
    instance.reset()
    expect(wrapper.state('modified')).to.be.false()
    expect(wrapper.state('validationRequested')).to.be.false()
  })

  it('validate()')
  it('render()')

  describe('private functions', () => {
    it('_errors')
    it('_value')
    it('_themedInputProps')
    it('_normalizeOption')
    it('_validations')
    it('_onChange')
    it('_onBlur')
    it('_guessInputType')
    it('_typeMapping')
    it('_themedComponent')
  })
})
