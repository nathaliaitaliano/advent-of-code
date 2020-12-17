const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('parse', function () {
    it('should return a array with a empty string given a answers input data line empty', function () {
      const answersInputData = [""]
      const answerDataExpected = []
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })

    it('should return an array with answer data from a passengers group given multiple answers groups inputs', function () {
      const answersInputData = ["abc", "", "def"]
      const answerDataExpected = ["abc", "def"]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })
  })
})