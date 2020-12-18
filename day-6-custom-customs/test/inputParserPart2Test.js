const assert = require('assert')
const inputParser = require('../part-two/inputParserPart2')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should return a array with a empty string given a answers input data line empty', function () {
      const answersInputData = [""]
      const answerDataExpected = []
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })

    it('should return a array with the answers from a passengers group, given an answers input data', function () {
      const answersInputData = ["abcdef"]
      const answerDataExpected = [["abcdef"]]
      const answerData = inputParser.sanitize(answersInputData)

      assert.deepStrictEqual(answerDataExpected, answerData)
    })
  })
})