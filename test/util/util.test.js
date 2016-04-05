/* global describe, it */

import { expect } from 'chai'
import { isConfigObj } from '../../src/util'

describe('isConfigObj', () => {
  const realObject = {
    a: 'a',
    b: 'b',
    c: {
      d: 'd',
    }
  }

  it('returns true when given an object', () => {
    const result = isConfigObj(realObject)
    expect(result).to.be.true()
  })

  it('returns false when given other things', () => {
    expect(isConfigObj("abc")).to.be.false()
    expect(isConfigObj(123)).to.be.false()
    expect(isConfigObj(undefined)).to.be.false()
    expect(isConfigObj(null)).to.be.false()
    expect(isConfigObj(true)).to.be.false()
    expect(isConfigObj(() => {})).to.be.false()
  })
})
