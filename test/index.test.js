/* global describe, it */

import { expect } from 'chai'
import { defaultTheme } from '../src/index'

describe('defaultTheme', () => {
  it('throws when given something that is not a theme', () => {
    expect(defaultTheme(5)).to.throw(Error, /Invalid Frig theme/)
  })
})
