import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { funcs } from '../src/date.js

chai.use(chaiChange)

describe('dateObj', () => {
  'use strict'

  it('exists', () => {
    expect( { dateObj } ).to.be.a('object')
  })
