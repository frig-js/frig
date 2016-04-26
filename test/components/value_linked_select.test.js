/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import ValueLinkedSelect from '../../src/components/value_linked_select'
import { mount } from 'enzyme'
import td from 'testdouble'

describe('<ValueLinkedSelect />', () => {
  const noop = () => {}
  const valueLink = (value, requestChange = noop) => ({ value, requestChange })

  describe('_getValue', () => {
    const testGetValue = (options, valueLinkObj, expected) => {
      const props = { options, valueLink: valueLinkObj }
      const wrapper = mount(<ValueLinkedSelect { ...props } />)
      const instance = wrapper.instance()
      expect(instance._getValue()).to.equal(expected)
    }

    it('should return the value of the selected option', () => {
      const options = [
        { value: 'CA', label: 'Canada' },
        { value: 'US', label: 'United States' },
      ]
      testGetValue(options, valueLink('US'), 'US')
    })

    it('should handle numeric values as Number type', () => {
      const options = [
        { value: 1, label: 'Canada' },
        { value: 2, label: 'United States' },
      ]
      testGetValue(options, valueLink(2), 2)
    })

    it('should return null when value is blank', () => {
      const options = [
        { value: '', label: '' },
        { value: 'US', label: 'United States' },
      ]
      testGetValue(options, valueLink(''), null)
    })
  })

  describe('render', () => {
    it('when props.options is empty, renders select with no options', () => {
      const wrapper = mount(<ValueLinkedSelect valueLink={valueLink(null)} />)
      const options = wrapper.find('option')
      expect(options).to.have.lengthOf(0)
    })

    it('when props.options exists, renders select with options', () => {
      const props = {
        options: [
          { value: 'CA', label: 'Canada' },
          { value: 'US', label: 'United States' },
        ],
        valueLink: valueLink(null),
      }
      const wrapper = mount(<ValueLinkedSelect {...props} />)
      const options = wrapper.find('option')
      expect(options).to.have.lengthOf(2)
    })

    it('renders an input with valueLink that calls props.requestChange', () => {
      const requestChange = td.function.call()
      const props = {
        options: [
          { value: 'CA', label: 'Canada' },
          { value: 'US', label: 'United States' },
        ],
        valueLink: valueLink('US', requestChange),
      }
      const wrapper = mount(<ValueLinkedSelect {...props} />)

      const select = wrapper.find('select')
      const selectValueLink = select.prop('valueLink')

      // requestChange gets called on component mount, clear the slate
      td.reset()

      // we want to verify that ValueLinkedSelect's props.requestChange
      // is the same function passed to <select>'s valuelink. Args don't
      // matter. (They won't be exactly the same since the onChange handler
      // goes through _getValue, rather than respecting the argument passed
      // to requestChange)
      selectValueLink.requestChange()
      td.verify(requestChange(), { ignoreExtraArgs: true })
    })
  })

  describe('componentWillMount / componentDidReceiveProps', () => {
    describe('when valueLink.value=null (e.g. no selection)', () => {
      it('requestChange is called with value of 1st option', () => {
        const requestChange = td.function.call()
        const props = {
          options: [
            { value: 'CA', label: 'Canada' },
            { value: 'US', label: 'United States' },
          ],
          valueLink: valueLink(null, requestChange),
        }

        // requestChange should be called on component mount
        const wrapper = mount(<ValueLinkedSelect { ...props } />)
        td.verify(requestChange('CA', { setModified: false }), { times: 1 })

        // simulate a re-render of the component with the same props
        wrapper.setProps(props)
        td.verify(requestChange('CA', { setModified: false }), { times: 2 })
      })

      it('and ANY options value is null, requestChange not called', () => {
        const requestChange = td.function()
        const props = {
          options: [
            { value: null, label: '-- Select --' },
            { value: 'CA', label: 'Canada' },
            { value: 'US', label: 'United States' },
          ],
          valueLink: valueLink(null, requestChange),
        }

        mount(<ValueLinkedSelect { ...props } />)

        td.verify(requestChange(), { times: 0, ignoreExtraArgs: true })
      })
    })

    describe('options went from 1 to 0', () => {
      it('calls requestChange(undefined) on re-render', () => {
        const requestChange = td.function.call()
        const props = {
          options: [
            { value: 'CA', label: 'Canada' },
          ],
          valueLink: valueLink('CA', requestChange),
        }

        const wrapper = mount(<ValueLinkedSelect { ...props } />)

        props.options = []
        wrapper.setProps(props)

        td.verify(requestChange(undefined), { ignoreExtraArgs: true })
      })
    })
  })
})
