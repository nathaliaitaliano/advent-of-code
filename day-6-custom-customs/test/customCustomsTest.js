const assert = require('assert')
const customCustoms = require('../customCustoms')

describe('CustomCustoms', function () {
  describe('count', function () {
    it('should count +1 for each alphabet letter, non repeated, given a string that contains answers of one passengers group', function () {
      const groupAnswers = "abcdefghijklmnopqrstuvwxyz"
      const yesAnswersExpected = 26
      const yesAnswers = customCustoms.count(groupAnswers)

      assert.strictEqual(yesAnswersExpected, yesAnswers)
    })

    it('shoul count +1 when a letter appear repeatedly, given a string that contains answers of one passengers group', function () {
      const groupAnswers = "aaabbbccc"
      const yesAnswersExpected = 3
      const yesAnswers = customCustoms.count(groupAnswers)

      assert.strictEqual(yesAnswersExpected, yesAnswers)
    })
  })
})