const assert = require('assert')
const airplaneAnalyse = require('../airplaneAnalyse')

describe('AirplaneAnalyse', function () {
  describe('validate', function () {
    it('should return TRUE given a airplane that contains 128 rows of seats', function () {
      const airplaneInput = ["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"]
      const seatsRowExpected = airplaneAnalyse.validate(airplaneInput)

      assert.ok(seatsRowExpected)
    })

    it('should return TRUE give a airplane that contains 8 columns of seats in each row', function () {
      const airplaneInput = ["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"]
      const seatsColumnsExpected = airplaneAnalyse.validate(airplaneInput)

      assert.ok(seatsColumnsExpected)
    })
  })
})