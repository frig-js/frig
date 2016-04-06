/* global describe, it */

import { expect } from 'chai'
import { defaultTheme } from '../src/index'

describe('defaultTheme', () => {
  it('throws when given something that is not a theme', () => {
    const fn = defaultTheme.bind(null, 5)
    expect(fn).to.throw(Error, /Invalid Frig theme/)
  })
})
