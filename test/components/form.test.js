/* global describe, it */

import React from 'react'
import { expect } from 'chai'
import Form from '../../src/components/form'
import { mount } from 'enzyme'

describe('<Form />', () => {
  // Despite eslint's pleadings, this can't be a stateless function
  // because <Form /> will tack a `ref` on to it, which is illegal.
  class ThemedForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() { return <div /> }
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
    const form = <Form data={formProps.data} />
    const wrapperBound = mount.bind(null, form)
    expect(wrapperBound).to.throw(Error, /onChange=/)
  })

  it('renders the theme.Form component', () => {
    const wrapper = mount(form)
    console.log(wrapper.debug())
    expect(wrapper.find(ThemedForm)).to.have.length(1)
  })

  // pending
  it('renders its children at some point in the tree')

  describe('via AbstractForm', () => {
    // This test would probably be tautological. Let's see.
    it('getChildContext()', () => {
      
    })

    // pending
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
