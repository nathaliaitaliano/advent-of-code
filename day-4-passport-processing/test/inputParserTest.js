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

    it('should return 2 objects given 2 inputs passport data', function () {
      const passportsInputData = "ecl:gry, hgt:183cm"
      const passportDataExpected = { ecl: 'gry', hgt: '183cm' }
      const passportData = inputParser.parse(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })
  })
})