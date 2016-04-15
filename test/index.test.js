/* global describe, it */

import { expect } from 'chai'
import { Form, UnboundInput } from '../src/index'
import Frig from '../src/index'

describe('defaultTheme', () => {
  it('throws when given something that is not an object', () => {
    const fn = Frig.defaultTheme.bind(null, 5)
    expect(fn).to.throw(Error, /Invalid Frig theme/)
  })

  it('assigns the theme to [Form|UnboundInput].originalClass.defaultProps.theme', () => {
    const theme = {}
    const result = Frig.defaultTheme(theme)
    expect(result).to.be.true()
    expect(Form.originalClass.defaultProps.theme).to.equal(theme)
    expect(UnboundInput.originalClass.defaultProps.theme).to.equal(theme)
  })
})
