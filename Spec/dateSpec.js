import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { dateObj } from '../part-1/date'

chai.use(chaiChange)

describe('dateObj', () => {
  'use strict'

  it('exists', () => {
    expect( { dateObj } ).to.be.a('object')
  })

  context( 'dateObj.format()', () => {
  it( 'takes a date in the format of "00/00/0000" and returns returns a formatted date unless entry is invalid in which an error will be thrown',() => {

    expect(dateObj.format.bind('September 7th 1992')).to.throw('Invalid Entry undefined')
      })
    })

  context( 'dateObj.monthOfTheYear()', () => {
  it( 'takes a date in the format of "00/00/0000" and returns the month of the year',() => {
    expect( dateObj.monthOfTheYear( '7/12/1981') ).to.equal( 'Jul' )
    expect( dateObj.monthOfTheYear( '8/12/1981') ).to.equal( 'Aug' )
    expect( dateObj.monthOfTheYear( 'September 7th 1992') ).to.equal(undefined)

      })
    })

})
