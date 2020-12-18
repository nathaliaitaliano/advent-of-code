const assert = require('assert')
const inputParser = require('../inputParserPart2')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should return a array with a empty string given a answers input data line empty', function () {
      const answersInputData = [""]
      const answerDataExpected = [""]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })
  })
})