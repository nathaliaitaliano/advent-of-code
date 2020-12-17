const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('parse', function () {
    it('should return a array with a empty string given a answers data line empty', function () {
      const answersInputData = [""]
      const answerDataExpected = [""]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })
  })
})