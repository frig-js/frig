/* global describe, it */

import { expect } from 'chai'
import { entries, humanize } from '../src/util'

describe('util', () => {
  describe('entries', () => {
    describe('returns [k,v] pairs for every entry', () => {
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
  })

  describe('humanize', () => {
    it('converts snake_case_fields to something human readable', () => {
      expect(humanize('daytime_phone_number')).to.equal(
        'Daytime phone number'
      )
    })
  })
})
