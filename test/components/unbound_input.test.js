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
  describe('public methods except validate', () => {
    let wrapper
    let instance

    beforeEach(() => {
      const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }
      const UndecoratedUnboundInput = UnboundInput.originalClass
      wrapper = mount(<UndecoratedUnboundInput {...defaultProps} />, opts)
      instance = wrapper.instance()
    })

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
      instance.reset()
      expect(wrapper.state('modified')).to.be.false()
      expect(wrapper.state('validationRequested')).to.be.false()
    })

    it('render() returns the themed component', () => {
      const themedComponent = wrapper.find(Stub)
      expect(themedComponent).to.have.length(1)
    })
  })

  describe('validate()', () => {
    const opts = { context: defaultContext, childContextTypes: defaultChildContextTypes }

    it('sets validationRequested', () => {
      const wrapper = mount(<UnboundInput.originalClass {...defaultProps} />, opts)
      const instance = wrapper.instance()
      instance.validate()
      expect(wrapper.state('validationRequested')).to.be.true()
    })

    it('returns true when there is an error on the field', () => {
      const props = Object.assign({}, defaultProps, {
        errors: {
          some_unbound_input: ['some error'],
        },
      })

      const wrapper = mount(<UnboundInput {...props} />, opts)
      const instance = wrapper.instance()
      expect(instance.validate()).to.be.false()
    })
  })

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
