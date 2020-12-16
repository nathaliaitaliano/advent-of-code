const assert = require('assert')
const binaryBoarding = require('../binaryBoarding')

describe('BinaryBoarding', function () {
  describe('generateSeatId', function () {
    it('should return a range rows initial coordinate given a airplane seats', function () {
      const rangeRowsInitialExpected = [0, 127]
      const rangeRowsInitial = binaryBoarding.rangeRowsInitial()

      assert.deepStrictEqual(rangeRowsInitialExpected, rangeRowsInitial)
    })

    it('should return a range columns initial coordinate given a airplane seats', function () {
      const rangeColumnsInitialExpected = [0, 7]
      const rangeColumnsInitial = binaryBoarding.rangeColumnsInitial()

      assert.deepStrictEqual(rangeColumnsInitialExpected, rangeColumnsInitial)
    })

    it('should return the lower half range rows coordinate, calculate from the range rows initial,  given a boarding passes that starts with the F letter', function () {
      const rangeRowsExpected = [0, 63]
      const boardingPasses = "F"
      const rangeRows = binaryBoarding.findSeatCoordinates(boardingPasses)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return the upper half range rows coordinate, calculate from the range rows initial, given a boarding passes that starts with the B letter', function () {
      const rangeRowsExpected = [0, 64]
      const boardingPasses = "B"
      const rangeRows = binaryBoarding.findSeatCoordinates(boardingPasses)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return the upper half range rows coordinate, calculate from the range rows result for the letter before, given a boarding passes withthe B letter', function () {
      const rangeRowsExpected = [32, 63]
      const boardingPasses = "FB"
      const rangeRows = binaryBoarding.findSeatCoordinates(boardingPasses)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it.only('should return the lower half range rows coordinate, calculate from the range rows result for the letter before, given a boarding passes withthe F letter', function () {
      const rangeRowsExpected = [32, 47]
      const boardingPasses = "FBF"
      const rangeRows = binaryBoarding.findSeatCoordinates(boardingPasses)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it.only('should return the upper half range rows coordinate, calculate from the range rows result for the letter before, given a boarding passes withthe F letter', function () {
      const rangeRowsExpected = [40, 47]
      const boardingPasses = "FBFB"
      const rangeRows = binaryBoarding.findSeatCoordinates(boardingPasses)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })
  })
})