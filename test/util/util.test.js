/* global describe, it */

import { expect } from 'chai'
import { isConfigObj, entries, merge, clone, humanize, capitalize } from '../../src/util'

describe('isConfigObj', () => {
  const realObject = {
    a: 'a',
    b: 'b',
    c: {
      d: 'd',
    },
  }

  it('returns true when given an object', () => {
    const result = isConfigObj(realObject)
    expect(result).to.be.true()
  })

  it('returns false when given other things', () => {
    expect(isConfigObj('abc')).to.be.false()
    expect(isConfigObj(123)).to.be.false()
    expect(isConfigObj(undefined)).to.be.false()
    expect(isConfigObj(null)).to.be.false()
    expect(isConfigObj(true)).to.be.false()
    expect(isConfigObj(() => {})).to.be.false()
  })
})

describe('entries returns [k,v] pairs for every entry', () => {
  it('in a simple obj', () => {
    const simpleObject = {
      a: 'a',
      b: 'b',
    }
    const result = entries(simpleObject)
    const expected = [
      ['a', 'a'],
      ['b', 'b'],
    ]
    expect(result).to.deep.equal(expected)
  })

  it('in a complex obj', () => {
    const simpleObject = {
      a: 'a',
      b: 'b',
      c: {
        x: 'x',
        y: 'y',
      },
    }
    const result = entries(simpleObject)
    const expected = [
      ['a', 'a'],
      ['b', 'b'],
      ['c', {
        x: 'x',
        y: 'y',
      }],
    ]
    expect(result).to.deep.equal(expected)
  })
})


describe('merge', () => {
  const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
  }

  it('merges three objects without conflict', () => {
    const result = merge(obj, { d: 'd' }, { e: 'e' })
    const expected = {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
    }
    expect(result).to.deep.equal(expected)
  })

  it('merges three objects, later objects win conflicts', () => {
    const result = merge(obj, { a: 'override1' }, { a: 'override2', b: 'override2' })
    const expected = {
      a: 'override2',
      b: 'override2',
      c: 'c',
      d: 'd',
      e: 'e',
    }
    expect(result).to.deep.equal(expected)
  })
})


describe('clone', () => {
  const obj = { a: 'a' }

  it('creates a new object', () => {
    expect(clone(obj)).not.to.equal(obj)
  })

  it('returns an object with the same data', () => {
    expect(clone(obj)).to.deep.equal(obj)
  })
})


describe('humanize', () => {
  it('converts snake_case_fields to something human readable', () => {
    expect(humanize('daytime_phone_number')).to.equal(
      'Daytime phone number'
    )
  })
})

describe('capitalize', () => {
  it('capitalizes the first character', () => {
    expect(capitalize('one')).to.equal('One')
  })
})

describe('setDefaults', () => {
  it('should have a test')
})

describe('promisedTimeout', () => {
  it('should have a test')
})
