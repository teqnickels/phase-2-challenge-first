import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { dateObj } from '../src/date'

chai.use(chaiChange)

describe('dateObj', () => {
  'use strict'

  it('exists', () => {
    expect( { dateObj } ).to.be.a('object')
  })

  context('funcs.dayOfWeek()', () => {
  it('takes a date and returns the day of week',() => {
    expect(funcs.dayOfWeek(99, 5, 14)).to.equal( 'Thursday' )
    expect(funcs.dayOfWeek(99, 5, 15)).to.equal( 'Friday' )
    expect(funcs.dayOfWeek(99, 5, 'blue')).to.equal( 'Error, invalid input' )
      })
    })

})
