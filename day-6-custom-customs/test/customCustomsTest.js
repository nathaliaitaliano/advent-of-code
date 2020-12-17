const assert = require('assert')
const customCustoms = require('../customCustoms')

describe('CustomCustoms', function () {
  describe('count', function () {
    it('should count +1 for each alphabet letter given a string that contains answers of one group', function () {
      const answers = "abcdefghijklmnopqrstuvwxyz"
      const answersYesExpected = 26
      const answersYes = customCustoms.count(answers)

      assert.strictEqual(answersYesExpected, answersYes)
    })
  })
})