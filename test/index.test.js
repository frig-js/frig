/* global describe, it */

import { expect } from 'chai'
import { defaultTheme, Form, UnboundInput } from '../src/index'

describe('defaultTheme', () => {
  it('throws when given something that is not an object', () => {
    const fn = defaultTheme.bind(null, 5)
    expect(fn).to.throw(Error, /Invalid Frig theme/)
  })

  it('assigns the theme to [Form|UnboundInput].originalClass.defaultProps.theme', () => {
    const theme = {}
    const result = defaultTheme(theme)
    expect(result).to.be.true()
    expect(Form.originalClass.defaultProps.theme).to.equal(theme)
    expect(UnboundInput.originalClass.defaultProps.theme).to.equal(theme)
  })
})
