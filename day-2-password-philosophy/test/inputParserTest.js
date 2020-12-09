const assert = require('assert')
const inputParser = require('../part-one/inputParser')

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
      const letter = "f"
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(letter, resultParserExpected.letter)
    })

    it('should return the password to be analyzed', function () {
      const inputData = "1-4 n: cyberpunk"
      const password = "cyberpunk"
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(password, resultParserExpected.password)
    })
  })
})