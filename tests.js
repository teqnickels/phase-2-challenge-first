import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { dateObj } from './part-1/functions'
import { func } from './part-2/functions'
import { funcProps } from './part-3/functions'
import { filter } from './part-4/functions'

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

  describe('funcProps', () => {
    'use strict'

    it('exists', () => {
      expect( { funcProps } ).to.be.a('object')
    })
    context( 'funcProps.nameProps()', () => {
    it( 'takes an object and returns the keys in alphabetical order',() => {
      let friend = { name: 'Dominique', age: 30, phone: '555-555-5555' }
      let family = { name: 'Diane' }
      let codes = [1,2,3,4]

      expect( funcProps.nameProps(friend) ).to.eql([ 'age', 'name', 'phone' ])
      expect( funcProps.nameProps(family)).to.eql([ 'name' ])
      expect( funcProps.nameProps(codes)).to.equal('Invalid Entry')
      })
    })
  })


  describe('filter.filterBetween()', () => {
    'use strict'

    it('exists', () => {
      expect( { filter } ).to.be.a('object')
    })
    context( 'filter.filterBetween()', () => {
    it( 'takes an array and min and max value and returns an array with properties in alphabetical order between min and max',() => {

      let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

      expect( filter.filterBetween(arr, 'deer', 'giraffe') ).to.eql([ 'dog' ])
      expect( filter.filterBetween(arr, 'chimp', 'lobster') ).to.eql([ 'cow', 'dog', 'lion' ])
      expect( filter.filterBetween(arr, 'chickadee', 'chimpanzee') ).to.eql([])
      expect( filter.filterBetween(2, 'chickadee', 'chimpanzee') ).to.equal("Invalid input")
      expect( filter.filterBetween(2, 2, 2) ).to.equal("Invalid input")

      })
    })
  })
