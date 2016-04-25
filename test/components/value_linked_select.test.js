/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import ValueLinkedSelect from '../../src/components/value_linked_select'
import { mount } from 'enzyme'

describe('<ValueLinkedSelect />', () => {
  const valueLink = (value) => ({ value, requestChange: () => {} })

  describe('missing options', () => {
    it('returns empty select', () => {
      const wrapper = mount(<ValueLinkedSelect valueLink={valueLink(null)} />)
      const options = wrapper.find('option')
      expect(options).to.have.lengthOf(0)
    })
  })
})
