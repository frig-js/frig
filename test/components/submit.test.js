/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import Submit from '../../src/components/submit'
import { mount } from 'enzyme'

const Stub = () => <div />
const defaultContext = {
  frigForm: {
    data: {},
    theme: {
      Submit: Stub,
    },
    errors: {},
    layout: 'some_layout',
    align: 'some_align',
    saved: {},
  },
}
Object.freeze(defaultContext)

describe('<Submit />', () => {
  const opts = { context: defaultContext }
  const wrapper = mount(<Submit title="Save" />, opts)
  const themedWrapper = wrapper.find(Stub)

  it('renders the themed <Submit> with the correct props', () => {
    expect(themedWrapper).to.have.length(1)
    expect(themedWrapper.prop('title')).to.equal('Save')
  })
})
