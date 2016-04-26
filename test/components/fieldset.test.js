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
    errors: {},
    layout: 'some_layout',
    saved: {},
    requestChildComponentChange: () => {},
    childComponentWillMount: () => {},
    childComponentWillUnmount: () => {},
  },
}

const defaultProps = {
  name: 'some_fieldset',
  children: Stub,
}

// This mock is necessary because <Fieldset> renders <FieldsetNestedForm>
// and calls some of its functions. This mock lets us change the behavior
// of the child component so we can meaningfully test some of the public
// methods which are just pass-thrus to the child.
//
// Pass in an object containing functions, e.g. { foo: () => {} }
const mockNestedForm = (replaceFunctions) =>
  class FieldsetNestedForm extends React.Component {
    constructor() {
      super()
      Object.keys(replaceFunctions).forEach((k) => {
        this[k] = replaceFunctions[k]
      })
    }
    render() { return <div /> }
  }

describe('<Fieldset />', () => {
  describe('Public Functions', () => {
    const testPublicFunction = (FieldsetNestedForm, assertionCallback, context = defaultContext) => {  // eslint-disable-line max-len
      const props = Object.assign({}, defaultProps, {
        FieldsetNestedForm,
      })
      const opts = { context }
      const wrapper = mount(<Fieldset {...props} />, opts)
      const instance = wrapper.instance()
      assertionCallback(instance)
    }

    describe('validate()', () => {
      it('calls FieldsetNestedForm.validate', () => {
        const validate = td.function()
        const isValid = td.function()
        const nestedForm = mockNestedForm({ validate, isValid })

        const assertion = (instance) => {
          instance.validate()
          td.verify(validate(), { times: 2 })
        }
        testPublicFunction(nestedForm, assertion)
      })
    })

    describe('isValid()', () => {
      it('return true when all nested form is true', () => {
        // set up isValid test double to always return true
        const isValid = td.function('isValid')
        td.when(isValid()).thenReturn(true)
        const nestedForm = mockNestedForm({ isValid })

        const assertion = (instance) => {
          expect(instance.isValid()).to.be.true()
          td.verify(isValid(), { times: 2 })
        }
        testPublicFunction(nestedForm, assertion)
      })
    })

    describe('isModified()', () => {
      it('return true when all nested form is true', () => {
        // set up isModified test double to return:
        //   true on the first invocation,
        //   false on the second invocation
        const isModified = td.function('isModified')
        td.when(isModified()).thenReturn(false, true)
        const nestedForm = mockNestedForm({ isModified })

        const assertion = (instance) => {
          expect(instance.isModified()).to.be.true()
          td.verify(isModified(), { times: 2 })
        }
        testPublicFunction(nestedForm, assertion)
      })
    })

    describe('modifications()', () => {
      it('returns an array of the children modifications', () => {
        // set up modifcations test double to return:
        //   field1 was modified on the first return,
        //   nothing was modified on the second return
        const modifications = td.function('modifications')
        td.when(modifications()).thenReturn(
          { field1: true, field2: false },
          { field1: false, field2: false },
        )
        const nestedForm = mockNestedForm({ modifications })

        const assertion = (instance) => {
          const expected = [
            { field1: true, field2: false },
            { field1: false, field2: false },
          ]
          expect(instance.modifications()).to.deep.equal(expected)
          td.verify(modifications(), { times: 2 })
        }
        testPublicFunction(nestedForm, assertion)
      })

      it('if frigForm.data.myFieldset is 1 object, should return object not array', () => {
        // arrange fake context for test, to simulate situation where `myFieldset`
        // is a single object instead of an array of objects
        const context = Object.assign({}, defaultContext)
        const data = { field1: 'abc', field2: 'def' }
        context.frigForm.data.some_fieldset = data

        // test double for child modifications() call
        const modifications = td.function('modifications')
        td.when(modifications()).thenReturn(
          { field1: true, field2: false },
        )
        const nestedForm = mockNestedForm({ modifications })

        const assertion = (instance) => {
          const expected = { field1: true, field2: false }
          expect(instance.modifications()).to.deep.equal(expected)
        }
        testPublicFunction(nestedForm, assertion, context)
      })

      it('if frigForm.data.myFieldset is undefined, return empty array', () => {
        // rewrite context so that instead of data.some_fieldset
        // is undefined
        const context = Object.assign({}, defaultContext)
        delete context.frigForm.data.some_fieldset

        const modifications = td.function('modifications')
        const nestedForm = mockNestedForm({ modifications })

        const assertion = (instance) => {
          const expected = []
          expect(instance.modifications()).to.deep.equal(expected)
        }
        testPublicFunction(nestedForm, assertion, context)
      })
    })

    describe('resetModified', () => {
      it('return true when all nested form is true', () => {
        const resetModified = td.function()
        const nestedForm = mockNestedForm({ resetModified })

        const assertion = (instance) => {
          // not sure what's going on here, for some reason
          // this.refs is an empty object. Why for this and not others?

          instance.resetModified()
          td.verify(resetModified(), { times: 2 })
        }
        testPublicFunction(nestedForm, assertion)
      })
    })

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
