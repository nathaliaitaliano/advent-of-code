const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('inputParser', function () {
    it('should return 1 object given 1 input passport data', function () {
      const passportsInputData = "ecl:gry"
      const passportDataExpected = { ecl: 'gry' }
      const passportData = inputParser.parse(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })
  })
})