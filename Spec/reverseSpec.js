import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { func } from '../part-2/reverse'

chai.use(chaiChange)

describe('func', () => {
  'use strict'

  it('exists', () => {
    expect( { func } ).to.be.a('object')
  })

  context( 'func.reverseSentence()', () => {
  it( 'takes a string and reverses it if there is more than one word in the string',() => {

    expect( func.reverseSentence('I am testing this string.') ).to.equal( "'string. this testing am I'" )
      })
    })

})
