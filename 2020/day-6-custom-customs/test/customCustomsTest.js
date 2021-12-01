const assert = require('assert')
const customCustoms = require('../part-one/customCustoms')

describe('CustomCustoms', function () {
  describe('count', function () {
    it('should count +1 for each alphabet letter, non repeated, given a string that contains answers of one passengers group', function () {
      const answers = ["abcdefghijklmnopqrstuvwxyz"]
      const yesAnswersExpected = 26
      const yesAnswers = customCustoms.count(answers)

      assert.strictEqual(yesAnswersExpected, yesAnswers)
    })

    it('should count +1 when a letter appear repeatedly, given a string that contains answers of one passengers group', function () {
      const answers = ["abcabcabc"]
      const yesAnswersExpected = 3
      const yesAnswers = customCustoms.count(answers)

      assert.strictEqual(yesAnswersExpected, yesAnswers)
    })

    it('should return yes answers quantity for all passengers group given a array that contains the answers', function () {
      const answers = ["aaabc", "deefh", "oobb"]
      const yesAnswersExpected = 8
      const yesAnswers = customCustoms.count(answers)

      assert.strictEqual(yesAnswersExpected, yesAnswers)
    })
  })
})