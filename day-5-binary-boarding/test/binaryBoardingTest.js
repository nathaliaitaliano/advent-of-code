const assert = require('assert')
const binaryBoarding = require('../binaryBoarding')

describe('BinaryBoarding', function () {
  describe('findSeatId', function () {
    it('should return a range [0, 127] initial coordinates for seats rows given a airplane', function () {
      const rangeRowsInitialExpected = [0, 127]

      const rangeRowsInitial = binaryBoarding.rangeRowsInitial()
      assert.deepStrictEqual(rangeRowsInitialExpected, rangeRowsInitial)
    })

    it('should return a range [0, 7] initial coordinates for seats columns given a airplane', function () {
      const rangeColumnsInitialExpected = [0, 7]

      const rangeColumnsInitial = binaryBoarding.rangeColumnsInitial()
      assert.deepStrictEqual(rangeColumnsInitialExpected, rangeColumnsInitial)
    })

    it('should return the lower half range rows [0, 63], based on initial range rows coordinate [0, 127], given a boarding passes that starts with the F letter', function () {
      const rangeRowsExpected = [0, 63]
      const boardingPasses = "FBFBBFFRLR"

      const rangeRows = binaryBoarding.findSeatId(boardingPasses)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })
  })
})