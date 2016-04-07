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
      // Private functions probably don't need to be tested,
      // so long as they're getting called/covered via public tests.
      // Putting them here as pending for exploratory testing/finding dead code.
      it('_themedFormProps()')
      it('_data()')
      it('childComponentWillMount()')
      it('childComponentWillUnmount()')
      it('_childComponents()')
      it('_onChildRequestChange()')
      it('_onSubmit()')
    })
  })
})
