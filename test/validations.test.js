/* global describe, it */

import { expect } from 'chai'
import validations from '../src/validations'

describe('validations', () => {
  const props = {
    value: 'foo',
  }

  describe('max', () => {
    it('returns undefined if validation passes', () => {
      props.value = 5
      const result = validations.max(props, 100)
      expect(result).to.be.undefined()
    })

    it('returns an error message if validation fails', () => {
      props.value = 500
      const result = validations.max(props, 100)
      expect(result).to.equal('Value cannot be greater than 100')
    })
  })

  describe('min', () => {
    it('returns undefined if validation passes', () => {
      props.value = 10
      const result = validations.min(props, 0)
      expect(result).to.be.undefined()
    })

    it('returns an error message if validation fails', () => {
      props.value = -50
      const result = validations.min(props, 0)
      expect(result).to.equal('Value cannot be less than 0')
    })
  })

  describe('required', () => {
    const requiredMessage = 'This field is required.'

    it('returns an error message when field is empty/null/undefined', () => {
      const empties = ['', null, undefined]
      empties.forEach((empty) => {
        props.value = empty
        const result = validations.required(props)
        expect(result).to.equal(requiredMessage)
      })
    })

    it('returns undefined if validation passes', () => {
      props.value = 'something'
      const result = validations.required(props)
      expect(result).to.be.undefined()
    })

    describe('when null options are present', () => {
      it('always validates successfully, even when "empty"', () => {
        props.options = [
          { label: 'one', value: 'one' },
          { label: 'empty', value: null },
        ]
        props.value = null
        const result = validations.required(props)
        expect(result).to.be.undefined()
      })
    })
  })
})
