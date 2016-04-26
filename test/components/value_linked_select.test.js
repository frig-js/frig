/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import ValueLinkedSelect from '../../src/components/value_linked_select'
import { mount } from 'enzyme'
import td from 'testdouble'

describe('<ValueLinkedSelect />', () => {
  const valueLink = (value) => ({ value, requestChange: () => {} })

  describe('_getValue', () => {
    it('should return the value of the selected option', () => {
      const props = {
        options: [
          { value: 'CA', label: 'Canada' },
          { value: 'US', label: 'United States' },
        ],
        valueLink: valueLink('US'),
      }

      const wrapper = mount(<ValueLinkedSelect { ...props } />)
      const instance = wrapper.instance()
      expect(instance._getValue()).to.equal('US')
    })

    it('should handle numeric values as Number type', () => {
      const props = {
        options: [
          { value: 1, label: 'Canada' },
          { value: 2, label: 'United States' },
        ],
        valueLink: valueLink(2),
      }

      const wrapper = mount(<ValueLinkedSelect { ...props } />)
      const instance = wrapper.instance()
      expect(instance._getValue()).to.equal(2)
    })

    it('should return null when value is blank', () => {
      const props = {
        options: [
          { value: '', label: '' },
          { value: 'US', label: 'United States' },
        ],
        valueLink: valueLink(''),
      }

      const wrapper = mount(<ValueLinkedSelect { ...props } />)
      const instance = wrapper.instance()
      expect(instance._getValue()).to.be.null()
    })
  })

  describe('props.options', () => {
    describe('missing options with ValueLink.value=null', () => {
      it('returns select with no options', () => {
        const wrapper = mount(<ValueLinkedSelect valueLink={valueLink(null)} />)
        const options = wrapper.find('option')
        expect(options).to.have.lengthOf(0)
      })
    })

    describe('componentWillMount', () => {
      describe('when valueLink.value=null (e.g. no selection)', () => {
        it('requestChange called with 1st options value', () => {
          const requestChange = td.function()

          const newValueLink = valueLink(null)
          newValueLink.requestChange = requestChange

          // set props
          const props = {
            options: [
              { value: 'CA', label: 'Canada' },
              { value: 'US', label: 'United States' },
            ],
            valueLink: newValueLink,
          }

          const wrapper = mount(<ValueLinkedSelect { ...props } />)

          // const valueLinkedSelect = wrapper.instance()
          td.verify(requestChange('CA', { setModified: false }), { times: 1 })

          // simulate a re-render of the component with the same props
          wrapper.setProps(props)
          td.verify(requestChange('CA', { setModified: false }), { times: 2 })
        })

        it('and ANY options value is null, requestChange not called', () => {
          const requestChange = td.function()

          const newValueLink = valueLink(null)
          newValueLink.requestChange = requestChange

          // set props
          const props = {
            options: [
              { value: null, label: '-- Select --' },
              { value: 'CA', label: 'Canada' },
              { value: 'US', label: 'United States' },
            ],
            valueLink: newValueLink,
          }

          mount(<ValueLinkedSelect { ...props } />)

          td.verify(requestChange(), { times: 0, ignoreExtraArgs: true })
        })
      })
    })
  })
})
