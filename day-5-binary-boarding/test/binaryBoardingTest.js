const assert = require('assert')
const binaryBoarding = require('../binaryBoarding')

describe('BinaryBoarding', function () {
  describe('findSeat', function () {
    it('should return TRUE given a airplane that contains 128 rows of seats', function () {
      const airplane = ["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"]
      const seatsRowExpected = binaryBoarding.airplaneValidate(airplane)

      assert.ok(seatsRowExpected)
    })

    it('should return TRUE give a airplane that contains 8 columns of seats in each row', function () {
      const airplane = ["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"]
      const seatsColumnsExpected = binaryBoarding.airplaneValidate(airplane)

      assert.ok(seatsColumnsExpected)
    })
  })
})