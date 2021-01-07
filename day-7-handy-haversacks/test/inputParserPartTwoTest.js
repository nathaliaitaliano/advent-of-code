const assert = require('assert')
const inputParser = require('../part-two/inputParserPartTwo')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should return a rule without bag(s) words and dots given a handy haversacks rule input data', function () {
      const handyHaversacksInput = "shiny gold bags contain 2 dark red bags."
      const ruleExpected = "shiny gold contain 2 dark red"
      const rule = inputParser.sanitize(handyHaversacksInput)

      assert.strictEqual(ruleExpected, rule)
    })
  })
})