/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import FormErrorList from '../../src/components/form_error_list'
import { mount } from 'enzyme'

describe('<FormErrorList />', () => {
  const Stub = () => <div />

  const errors = { base: ['one', 'two', 'three'], someInput: ['should not be blank'] }
  const context = {
    frigForm: {
      theme: {
        FormErrorList: Stub,
      },
      errors,
    },
  }
  const childContextTypes = {
    frigForm: React.PropTypes.object.isRequired,
  }
  const opts = { context, childContextTypes }
  const wrapper = mount(<FormErrorList />, opts)
  const stub = wrapper.find(Stub)

  it('renders the themed FormErrorList', () => {
    expect(stub).to.have.length(1)
  })

  it('passes the errors.base from context to themed FormErrorList props', () => {
    const actualErrors = stub.prop('errors')
    expect(actualErrors).to.deep.equal(['one', 'two', 'three'])
  })
})
