import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { dateObj } from './part-1/functions'
import { func } from './part-2/functions'

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

describe('func', () => {
  'use strict'

  it('exists', () => {
    expect( { func } ).to.be.a('object')
  })
  context( 'func.reverseSentence()', () => {
  it( 'takes a string and reverses it if there is more than one word in the string',() => {

    expect( func.reverseSentence('I am testing this string.') ).to.equal( "'string. this testing am I'" )
    expect( func.reverseSentence( 'string.' ) ).to.equal( "'string.'")
    expect( func.reverseSentence( '123' ) ).to.equal( "'123'")
    expect( func.reverseSentence( 3432423432 ) ).to.equal( 'invalid input' )

      })
    })

})
