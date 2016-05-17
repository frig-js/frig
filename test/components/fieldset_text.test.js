/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import FieldsetText from '../../src/components/fieldset_text'
import { mount } from 'enzyme'

const defaultContext = {
  frigFieldset: {
    index: 1,
  },
}
Object.freeze(defaultContext)

const defaultProps = {
  text: (index) => `Testing ${index}`,
}

describe('<FieldsetText />', () => {
  it('renders an <span> with the text `Testing 1`', () => {
    const opts = { context: defaultContext }
    const wrapper = mount(<FieldsetText {...defaultProps} />, opts)
    const span = wrapper.find('span')
    const spanProps = span.props()

    expect(spanProps.children).to.equal('Testing 1')
  })
})
