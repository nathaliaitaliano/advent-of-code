const assert = require('assert')
const binaryBoarding = require('../binaryBoarding')

describe('BinaryBoarding', function () {
  describe('findSeatID', function () {
    it('should return a range [0, 127] initial coordinates for seats rows given a airplane', function () {
      const rangeRowsInitialExpected = [0, 127]

      const rangeRowsInitial = binaryBoarding.rangeRowsInitial()
      assert.deepStrictEqual(rangeRowsInitialExpected, rangeRowsInitial)
    })
  })
})