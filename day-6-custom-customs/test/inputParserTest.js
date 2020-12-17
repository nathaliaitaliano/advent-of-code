const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('parse', function () {
    it('should return a array with a empty string given a answers input data line empty', function () {
      const answersInputData = [""]
      const answerDataExpected = [""]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })

    it('should return a string array with the answers from a passengers group, given an answers input data', function () {
      const answersInputData = ["abcdef"]
      const answerDataExpected = ["abcdef"]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })

    it('should return a string array with answer data from a passengers group given multiple answers groups inputs', function () {
      const answersInputData = ["abc", "", "def"]
      const answerDataExpected = ["abc", "def"]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })

    it('should return an array with answers data for a passengers group given an answer data input with multiples lines', function () {
      const answersInputData = ["abc", "", "def", "",
        "g",
        "h",
        "i"]
      const answerDataExpected = ["abc", "def", "ghi"]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })
  })
})