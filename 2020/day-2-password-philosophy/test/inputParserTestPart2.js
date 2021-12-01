const assert = require('assert')
const inputParser = require('../part-two/inputParserPart2')

describe('InputParser', function () {
  describe('inputParser', function () {
    it('should return 2 for the first position expected and 4 for the second position expected', function () {
      const inputData = "2-4"
      const firstPositionExpected = 2
      const secondPositionExpected = 4
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(firstPositionExpected, resultParserExpected.firstPositionExpected)
      assert.strictEqual(secondPositionExpected, resultParserExpected.secondPositionExpected)
    })

    it('should return the letter that password need contain', function () {
      const inputData = "2-4 p:"
      const letter = "p"
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(letter, resultParserExpected.letter)
    })

    it('should return the password to be analyzed', function () {
      const inputData = "1-4 m: magicite"
      const password = "magicite"
      const resultParserExpected = inputParser.parse(inputData)

      assert.strictEqual(password, resultParserExpected.password)
    })
  })
})