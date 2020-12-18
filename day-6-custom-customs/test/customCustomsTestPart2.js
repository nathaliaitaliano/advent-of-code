const assert = require('assert')
const customCustoms = require('../part-two/customCustomsPart2')

describe('CustomCustomsPart2', function () { 
  describe('countQuestions', function () {
    it('should return the quantity of questions that have yes answered by all passengers of one group', function () {
      const answers = ["abc"]
      const questionsQuantityExpected = 3
      const questionsQuantity = customCustoms.countQuestions(answers)

      assert.strictEqual(questionsQuantityExpected, questionsQuantity)
    })
  })
})