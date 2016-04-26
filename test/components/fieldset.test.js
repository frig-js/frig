/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import Fieldset from '../../src/components/fieldset'
import { mount } from 'enzyme'
import td from 'testdouble'

const Stub = () => <div />
const defaultContext = {
  frigForm: {
    data: {
      some_fieldset: [
        { field1: 'Number 1', field2: 'Number 2' },
        { field1: 'Number 3', field2: 'Number 4' },
      ],
      other_fieldset: [{ fieldOther2: 'Other 1' }],
    },
    theme: {
      Input: Stub,
    },
    errors: {
      some_fieldset: [{ field1: 'Some Other Error 1' }, {
        field1: 'Some Other Error 1',
        field2: 'Some Other Error 2',
        field3: 'Some Other Error 3',
      }],
    },
    layout: 'some_layout',
    saved: {
      some_fieldset: [{ field1: true }, {}],
      other_fieldset: [{ fieldOther2: false }],
    },
    requestChildComponentChange: () => {},
    childComponentWillMount: () => {},
    childComponentWillUnmount: () => {},
  },
}

const defaultProps = {
  name: 'some_fieldset',
  children: Stub,
}

describe('<Fieldset />', () => {
  describe('Public Functions', () => {
    let mockNestedForm

    beforeEach(() => {
      mockNestedForm = (replaceFunctions) =>
        class FieldsetNestedForm extends React.Component {
          constructor() {
            super()
            Object.keys(replaceFunctions).forEach((k) => {
              this[k] = replaceFunctions[k]
            })
          }
          render() { return <div /> }
        }
    })

    describe('validate', () => {
      it('calls FieldsetNestedForm.validate', () => {
        const validate = td.function()
        const isValid = td.function()
        const props = Object.assign({}, defaultProps, {
          FieldsetNestedForm: mockNestedForm({ validate, isValid }),
        })
        const opts = { context: defaultContext }
        const wrapper = mount(<Fieldset {...props} />, opts)
        const instance = wrapper.instance()

        instance.validate()

        td.verify(validate(), { times: 2 })
      })
    })

    describe('isValid', () => {
      it('return true when all nested form is true', () => {
        // set up isValid test double to always return true
        const isValid = td.function('isValid')
        td.when(isValid()).thenReturn(true)

        const props = Object.assign({}, defaultProps, {
          FieldsetNestedForm: mockNestedForm({ isValid }),
        })
        const opts = { context: defaultContext }
        const wrapper = mount(<Fieldset {...props} />, opts)
        const instance = wrapper.instance()

        expect(instance.isValid()).to.be.true()
        td.verify(isValid(), { times: 2 })
      })
    })

    describe('isModified', () => {
      it('return true when all nested form is true', () => {
        // set up isModified test double to return:
        //   true on the first invocation,
        //   false on the second invocation
        const isModified = td.function('isModified')
        td.when(isModified()).thenReturn(false, true)

        const props = Object.assign({}, defaultProps, {
          FieldsetNestedForm: mockNestedForm({ isModified }),
        })
        const opts = { context: defaultContext }
        const wrapper = mount(<Fieldset {...props} />, opts)
        const instance = wrapper.instance()

        expect(instance.isModified()).to.be.true()
        td.verify(isModified(), { times: 2 })
      })
    })

    describe('modifications', () => {
      it('returns an array of the children modifications', () => {
        // set up modifcations test double to return:
        //   field1 was modified on the first return,
        //   nothing was modified on the second return
        const modifications = td.function('modifications')
        td.when(modifications()).thenReturn(
          { field1: true, field2: false },
          { field1: false, field2: false },
        )

        const props = Object.assign({}, defaultProps, {
          FieldsetNestedForm: mockNestedForm({ modifications }),
        })
        const opts = { context: defaultContext }
        const wrapper = mount(<Fieldset {...props} />, opts)
        const instance = wrapper.instance()

        const expected = [
          { field1: true, field2: false },
          { field1: false, field2: false },
        ]

        expect(instance.modifications()).to.deep.equal(expected)
        td.verify(modifications(), { times: 2 })
      })

      it('if frigForm.data.myFieldset is 1 object, should return object not array', () => {
        // rewrite context so that instead of data.some_fieldset being an
        // array of objects, it is only one single object
        const context = Object.assign({}, defaultContext)
        const data = { field1: 'abc', field2: 'def' }
        context.frigForm.data.some_fieldset = data

        // test double
        const modifications = td.function('modifications')
        td.when(modifications()).thenReturn(
          { field1: true, field2: false },
        )

        // mount and render
        const props = Object.assign({}, defaultProps, {
          FieldsetNestedForm: mockNestedForm({ modifications }),
        })
        const opts = { context: defaultContext }
        const wrapper = mount(<Fieldset {...props} />, opts)
        const instance = wrapper.instance()

        // assert
        const expected = { field1: true, field2: false }
        expect(instance.modifications()).to.deep.equal(expected)
      })

      it('if frigForm.data.myFieldset is undefined, return empty array', () => {
        // rewrite context so that instead of data.some_fieldset
        // is undefined
        const context = Object.assign({}, defaultContext)
        delete context.frigForm.data.some_fieldset

        // mount and render
        const props = Object.assign({}, defaultProps, {
          FieldsetNestedForm: mockNestedForm(),
        })
        const opts = { context: defaultContext }
        const wrapper = mount(<Fieldset {...props} />, opts)
        const instance = wrapper.instance()

        // assert
        const expected = []
        expect(instance.modifications()).to.deep.equal(expected)
      })
    })

    // describe('resetModified', () => {
    //   it('return true when all nested form is true', () => {
    //     // set up isModified test double to return:
    //     //   true on the first invocation,
    //     //   false on the second invocation
    //     const resetModified = td.function()

    //     const props = Object.assign({}, defaultProps, {
    //       FieldsetNestedForm: mockNestedForm({ resetModified }),
    //     })
    //     const opts = { context: defaultContext }
    //     const wrapper = mount(<Fieldset {...props} />, opts)
    //     const instance = wrapper.instance()

    //     instance.resetModified()

    //     td.verify(resetModified(), { times: 2 })
    //   })
    // })

    // describe('reset', () => {
    //   it('return true when all nested form is true', () => {
    //     // set up isModified test double to return:
    //     //   true on the first invocation,
    //     //   false on the second invocation
    //     const reset = td.function()

    //     const props = Object.assign({}, defaultProps, {
    //       FieldsetNestedForm: mockNestedForm({ reset }),
    //     })
    //     const opts = { context: defaultContext }
    //     const wrapper = mount(<Fieldset {...props} />, opts)
    //     const instance = wrapper.instance()

    //     instance.reset()

    //     td.verify(reset(), { times: 2 })
    //   })
    // })
  })
})
