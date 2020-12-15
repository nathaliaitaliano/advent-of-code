const assert = require('assert')
const binaryBoarding = require('../binaryBoarding')

describe('BinaryBoarding', function () {
  describe('findSeat', function () {
    it('should return 128 rows of seats given a airplane', function () {
      const airplane = ["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"]
      const seatsRows = 128
      const seatsRowExpected = binaryBoarding.findSeat(airplane)

      assert.strictEqual(seatsRowExpected, seatsRows)
    })
  })
})