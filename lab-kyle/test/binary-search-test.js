const expect = require('chai').expect
const bs = require('../lib/binary-search')

describe('binary-search', function() {
  beforeEach(done => {
    this.array = [1, 2, 3, 4, 5]
    done()
  })
  it('should return true given a value of 1', done => {
    let result = bs(1, this.array)
    expect(result).to.equal(true)
    done()
  })
  it('should return false given a value of 6', done => {
    let result = bs(6, this.array)
    expect(result).to.equal(false)
    done()
  })
})
