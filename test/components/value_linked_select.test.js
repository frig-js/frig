/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import ValueLinkedSelect from '../../src/components/value_linked_select'
import { mount } from 'enzyme'
import td from 'testdouble'

describe('<ValueLinkedSelect />', () => {
  const noop = () => {}

  describe('_getValue', () => {
    const testGetValue = (options, value, onChange, expected) => {
      const props = { options, value, onChange }
      const wrapper = mount(<ValueLinkedSelect { ...props } />)
      const instance = wrapper.instance()
      expect(instance._getValue()).to.equal(expected)
    }

    it('should return the value of the selected option', () => {
      const options = [
        { value: 'CA', label: 'Canada' },
        { value: 'US', label: 'United States' },
      ]
      testGetValue(options, 'US', noop, 'US')
    })

    it('should handle numeric values as Number type', () => {
      const options = [
        { value: 1, label: 'Canada' },
        { value: 2, label: 'United States' },
      ]
      testGetValue(options, 2, noop, 2)
    })

    it('should return \'\' when value is blank', () => {
      const options = [
        { value: '', label: '' },
        { value: 'US', label: 'United States' },
      ]
      testGetValue(options, '', noop, '')
    })
  })

  describe('render', () => {
    it('when props.options is empty, renders select with no options', () => {
      const wrapper = mount(<ValueLinkedSelect value={''} onChange={noop} />)
      const options = wrapper.find('option')
      expect(options).to.have.lengthOf(0)
    })

    it('when props.options exists, renders select with options', () => {
      const props = {
        options: [
          { value: 'CA', label: 'Canada' },
          { value: 'US', label: 'United States' },
        ],
        value: '',
        onChange: noop,
      }
      const wrapper = mount(<ValueLinkedSelect {...props} />)
      const options = wrapper.find('option')
      expect(options).to.have.lengthOf(2)
    })

    it('renders an input with onChange that calls ValueLinkedSelect.props.onChange', () => {
      const onChange = td.function.call()
      const props = {
        options: [
          { value: 'CA', label: 'Canada' },
          { value: 'US', label: 'United States' },
        ],
        value: 'US',
        onChange,
      }
      const wrapper = mount(<ValueLinkedSelect {...props} />)

      const select = wrapper.find('select')
      const selectOnChange = select.prop('onChange')

      // requestChange gets called on component mount, clear the slate
      td.reset()

      // we want to verify that ValueLinkedSelect's props.requestChange
      // is the same function passed to <select>'s valuelink. Args don't
      // matter. (They won't be exactly the same since the onChange handler
      // goes through _getValue, rather than respecting the argument passed
      // to requestChange)
      selectOnChange()
      td.verify(onChange(), { ignoreExtraArgs: true })
    })
  })

  describe('componentWillMount / componentDidReceiveProps', () => {
    describe('when value=\'\' (e.g. no selection)', () => {
      it('onChange is called with value of 1st option', () => {
        const onChange = td.function.call()
        const props = {
          options: [
            { value: 'CA', label: 'Canada' },
            { value: 'US', label: 'United States' },
          ],
          value: '',
          onChange,
        }

        // requestChange should be called on component mount
        const wrapper = mount(<ValueLinkedSelect { ...props } />)
        td.verify(onChange('CA', { setModified: false }), { times: 1 })

        // simulate a re-render of the component with the same props
        wrapper.setProps(props)
        td.verify(onChange('CA', { setModified: false }), { times: 2 })
      })

      it('and ANY options value is \'\', requestChange not called', () => {
        const onChange = td.function()
        const props = {
          options: [
            { value: '', label: '-- Select --' },
            { value: 'CA', label: 'Canada' },
            { value: 'US', label: 'United States' },
          ],
          value: '',
          onChange,
        }

        mount(<ValueLinkedSelect { ...props } />)

        td.verify(onChange(), { times: 0, ignoreExtraArgs: true })
      })
    })

    describe('options went from 1 to 0', () => {
      it('calls requestChange(undefined) on re-render', () => {
        const onChange = td.function.call()
        const props = {
          options: [
            { value: 'CA', label: 'Canada' },
          ],
          value: 'CA',
          onChange,
        }

        const wrapper = mount(<ValueLinkedSelect { ...props } />)

        props.options = []
        wrapper.setProps(props)

        td.verify(onChange(undefined), { ignoreExtraArgs: true })
      })
    })
  })
})
