import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { dateObj } from '../src/date.js

chai.use(chaiChange)

describe('dateObj', () => {
  'use strict'

  it('exists', () => {
    expect( { dateObj } ).to.be.a('object')
  })
