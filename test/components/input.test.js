/* global describe, it, beforeEach, afterEach */

import React from 'react'
import { expect } from 'chai'
import Input from '../../src/components/input'
import { mount } from 'enzyme'
import td from 'testdouble'

const Stub = () => <div />
const defaultContext = {
  frigForm: {
    data: {
      some_input: 'some_input data',
      other_input: 'other_input data',
    },
    theme: {
      Input: Stub,
    },
    errors: {
      some_input: [
        'error1',
        'error2',
        'error3',
      ],
    },
    layout: 'some_layout',
    align: 'some_align',
    saved: {
      some_input: true,
      other_input: false,
    },
    requestChildComponentChange: () => {},
    childComponentWillMount: () => {},
    childComponentWillUnmount: () => {},
  },
}

const defaultProps = {
  name: 'some_input',
  type: 'string',
}

describe('<Input />', () => {
  afterEach(() => { td.reset() })

  it('renders an <UnboundInput> with the correct props', () => {
    const opts = { context: defaultContext }
    const wrapper = mount(<Input {...defaultProps} />, opts)
    const unboundInput = wrapper.find('UnboundInput')
    const unboundProps = unboundInput.props()

    expect(unboundProps.name).to.equal('some_input')
    expect(unboundProps.value).to.equal('some_input data')
    expect(unboundProps.saved).to.be.true()

    expect(unboundProps.errors).to.deep.equal(['error1', 'error2', 'error3'])
  })

  describe('_onChange', () => {
    let requestChildComponentChange
    let onChange
    let onValidChange
    let input

    beforeEach(() => {
      // test doubles
      requestChildComponentChange = td.function()
      onChange = td.function('onChange')
      onValidChange = td.function()

      // set props
      const props = Object.assign({}, defaultProps, {
        onChange,
        onValidChange,
      })

      // set context
      const context = Object.assign({}, defaultContext)
      context.frigForm.requestChildComponentChange = requestChildComponentChange

      // mount component
      const opts = { context }
      const wrapper = mount(<Input {...props} />, opts)

      // act
      input = wrapper.instance()
      input._onChange('some_new_value', false)

      // console.log(td.explain(requestChildComponentChange))
    })

    // assert
    it('when fired, calls requestChildComponentChange (private API)', () => {
      td.verify(requestChildComponentChange('some_input', 'some_new_value'))
    })
    it('when fired, calls onChange (public API)', () => {
      td.verify(onChange('some_new_value', false))
    })
    it('when fired, does not call onValidChange when invalid (public API)', () => {
      td.verify(onValidChange(), { times: 0 })
    })

    it('when fired, does call onValidChange when valid (public API)', () => {
      // act... again
      input._onChange('some_new_value', true)
      td.verify(onValidChange('some_new_value', true))
    })
  })
})
