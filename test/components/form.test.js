/* global describe, it */

import React from 'react'
import { expect } from 'chai'
import Form from '../../src/components/form'
import { mount } from 'enzyme'

describe('<Form />', () => {
  // Despite eslint's pleadings, this can't be a stateless function
  // because <Form /> will tack a `ref` on to it, which is illegal.
  class ThemedForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() { return <form>{this.props.children}</form> } // eslint-disable-line react/prop-types
  }

  const formProps = {
    theme: { Form: ThemedForm },
    data: {},
    onChange: () => {},
    saved: {},
    errors: {},
    layout: 'horizontal',
    align: 'right',
  }
  const form = (
    <Form {...formProps} >
      <div>child</div>
    </Form>
  )

  it('fails fast when props.data is not provided', () => {
    const badForm = <Form onChange={formProps.onChange} />
    const wrapperBound = mount.bind(null, badForm)
    expect(wrapperBound).to.throw(Error, /data=/)
  })

  it('fails fast when props.onChange is not provided', () => {
    const badForm = <Form data={formProps.data} />
    const wrapperBound = mount.bind(null, badForm)
    expect(wrapperBound).to.throw(Error, /onChange=/)
  })

  it('renders the theme.Form component', () => {
    const wrapper = mount(form)
    expect(wrapper.find(ThemedForm)).to.have.length(1)
  })

  describe('via AbstractForm', () => {
    describe('context', () => {
      it('passes context down to its children', () => {
        const UndecoratedForm = Form.originalClass
        const wrapper = mount(<UndecoratedForm {...formProps} />)
        const context = wrapper.instance().getChildContext()

        expect(context.frigForm).to.exist()
        expect(context.frigForm.errors).to.equal(formProps.errors)
        expect(context.frigForm.layout).to.equal(formProps.layout)
        expect(context.frigForm.theme).to.equal(formProps.theme)
        expect(context.frigForm.align).to.equal(formProps.align)
        expect(context.frigForm.saved).to.equal(formProps.saved)
        expect(context.frigForm.data).to.equal(formProps.data)
      })

      it('passes requestChildComponentChange via context')
      it('passes childComponentWillMount via context')
      it('passes childComponentWillUnmount via context')
      it('passes submit via context')
    })

    it('validate()')
    it('isModified()')
    it('modifications()')
    it('resetModified()')
    it('reset()')
    it('formData()')
    describe('private', () => {
      // Usually, we wouldn't test private functions so long as they get called
      // via a test exercising the public API. However, these tests were written
      // much later than the code itself. They exist to help new developers
      // explore & understand the code base. They are very brittle (coupled
      // to implementation). Major design changes will probably require removing
      // these tests. They might still have some use in detecting regressions,
      // but that's not their primary purpose.
      it('_themedFormProps()')
      it('_data()')
      describe('childComponentWill[Mount|Unmount]', () => {
        const UndecoratedForm = Form.originalClass
        const wrapper = mount(<UndecoratedForm {...formProps} />)
        const instance = wrapper.instance()

        const object = {}
        instance.childComponentWillMount('name', object)
        const mountedComponent = instance._childComponents()[0]

        it('mount adds components to _childComponents backing array', () => {
          expect(mountedComponent).to.equal(object)
        })

        it('unmount removes components from _childComponents backing array', () => {
          instance.childComponentWillUnmount('name')
          const childComponents = instance._childComponents()
          expect(childComponents).to.deep.equal([])
        })
      })

      it('_onChildRequestChange()')
      it('_onSubmit()')
    })
  })
})
