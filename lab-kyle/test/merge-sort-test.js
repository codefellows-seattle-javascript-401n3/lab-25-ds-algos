const expect = require('chai').expect
const mergeSort = require('../lib/merge-sort')

describe('mergeSort', function() {
  beforeEach(done => {
    this.array = [12, 3, 4, 19, -1, 50, 2, -12]
    this.sorted = [-12, -1, 2, 3, 4, 12, 19, 50]
    done()
  })

  it('should return empty array if the array is empty', done => {
    let result = mergeSort([])
    expect(result).to.eql([])
    done()
  })

  it('should return an array if it only has one element', done => {
    let result = mergeSort([2])
    expect(result).to.eql([2])
    done()
  })

  it('should return a sorted array', done => {
    let result = mergeSort(this.array)
    expect(result).to.eql(this.sorted)
    done()
  })
})
