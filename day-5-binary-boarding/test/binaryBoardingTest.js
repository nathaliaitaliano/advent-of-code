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
      const boardingPass = "F"
      const rangeRows = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return the upper half range rows coordinate, calculate from the range rows initial, given a boarding passes that starts with the B letter', function () {
      const rangeRowsExpected = [64, 127]
      const boardingPass = "B"
      const rangeRows = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return the upper half range rows coordinate, calculate from the range rows result for the letter before, given a boarding passes withthe B letter', function () {
      const rangeRowsExpected = [32, 63]
      const boardingPass = "FB"
      const rangeRows = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return the lower half range rows coordinate, calculate from the range rows result for the letter before, given a boarding passes withthe F letter', function () {
      const rangeRowsExpected = [32, 47]
      const boardingPass = "FBF"
      const rangeRows = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return the upper half range rows coordinate, calculate from the range rows result for the letter before, given a boarding passes withthe F letter', function () {
      const rangeRowsExpected = [40, 47]
      const boardingPass = "FBFB"
      const rangeRows = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(rangeRowsExpected, rangeRows)
    })

    it('should return a seat row (with the min value of a range) given a boarding pass that have the row reference finished with F letter', function () {
      const seatRowExpected = 44
      const boardingPass = "FBFBBFFRLR"
      const seatRow = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(seatRowExpected, seatRow)
    })

    it('should return a seat row (with the max value of a range) given a boarding pass that have the row reference finished with B letter', function () {
      const seatRowExpected = 45
      const boardingPass = "FBFBBFBRLR"
      const seatRow = binaryBoarding.findSeatRowCoordinate(boardingPass)

      assert.deepStrictEqual(seatRowExpected, seatRow)
    })

    it('should return a upper half range columns coordinate, based on the range columns initial, given a boarding passes that contains a columns reference started by R letter', function () {
      const seatColumnExpected = [4, 7]
      const boardingPass = "FBFBBFBR"
      const seatColumn = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(seatColumnExpected, seatColumn)
    })

    it('should return a lower half range columns coordinate, based on the range columns initial, given a boarding passes that contains a columns reference started by L letter', function () {
      const seatColumnExpected = [0, 3]
      const boardingPass = "FBFBBFBL"
      const seatColumn = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(seatColumnExpected, seatColumn)
    })

     it('should return the lower half range columns coordinate, calculate from the range columns result for the letter before, given a boarding passes that columns reference is started by L letter', function () {
      const rangeColumnsExpected = [4, 5]
      const boardingPass = "FBFBBFBRL"
      const rangeColumns = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(rangeColumnsExpected, rangeColumns)
    })

    it('should return the upper half range columns coordinate, calculate from the range columns result for the letter before, given a boarding passes that columns reference is started by R letter', function () {
      const rangeColumnsExpected = [6, 7]
      const boardingPass = "FBFBBFBRR"
      const rangeColumns = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(rangeColumnsExpected, rangeColumns)
    })

    it('should return seat column coordinate (with the max value of a range), boarding passes that columns reference is finished by R letter', function () {
      const rangeColumnsExpected = 5
      const boardingPass = "FBFBBFBRLR"
      const rangeColumns = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(rangeColumnsExpected, rangeColumns)
    })

    it('should return seat column coordinate (with the min value of a range), boarding passes that columns reference is finished by L letter', function () {
      const rangeColumnsExpected = 4
      const boardingPass = "FBFBBFBRLL"
      const rangeColumns = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(rangeColumnsExpected, rangeColumns)
    })

    it('should return seat column coordinate (with the max value of a range), boarding passes that columns reference is finished by R letter', function () {
      const rangeColumnsExpected = 5
      const boardingPass = "FBFBBFBRLR"
      const rangeColumns = binaryBoarding.findSeatColumnCoordinate(boardingPass)

      assert.deepStrictEqual(rangeColumnsExpected, rangeColumns)
    })

    it('should return seat Id given a boarding pass number', function () {
      const seatIdExpected = 357
      const boardingPass = "FBFBBFBRLR"
      const seatId = binaryBoarding.generateSeatId(boardingPass)

      assert.deepStrictEqual(seatIdExpected, seatId)
    })
  })
})