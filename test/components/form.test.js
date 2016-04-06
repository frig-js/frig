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

  const theme = { Form: ThemedForm }
  const data = {}
  const onChange = () => {}

  it('fails fast when props.data is not provided', () => {
    const form = <Form onChange={onChange} />
    const wrapperBound = mount.bind(null, form)
    expect(wrapperBound).to.throw(Error, /data=/)
  })

  it('fails fast when props.onChange is not provided', () => {
    const form = <Form data={data} />
    const wrapperBound = mount.bind(null, form)
    expect(wrapperBound).to.throw(Error, /onChange=/)
  })

  it('renders the theme.Form component', () => {
    const form = (
      <Form data={data} onChange={onChange} theme={theme}>
        <div>child</div>
      </Form>
    )
    const wrapper = mount(form)
    expect(wrapper.find(ThemedForm)).to.have.length(1)
  })
})
