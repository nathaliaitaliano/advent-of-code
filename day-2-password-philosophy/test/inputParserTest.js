const { strict, strictEqual } = require('assert')
const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('inputParser', function () {
    it('should return the MIN and MAX quantity for a letter appear on a password', function () {
      const inputData = "1-3"
      const letterMinQuantityExpected = 1
      const letterMaxQuantityExpected = 3
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(letterMinQuantityExpected, resultParserExpected.letterMinQuantityExpected)
      assert.strictEqual(letterMaxQuantityExpected, resultParserExpected.letterMaxQuantityExpected)
    })

    it('should return the letter that password need contain', function () {
      const inputData = "2-4 f:"
      const letterExpected = "f"
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(letterExpected, resultParserExpected.letterExpected)

    })
  })
})