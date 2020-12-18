const assert = require('assert')
const customCustoms = require('../part-two/customCustomsPart2')

describe('CustomCustomsPart2', function () { 
  describe('countQuestions', function () {
    it('should return the quantity of questions that have yes answer by a group composed of one person', function () {
      const answersData = [["abc"]]
      const questionsQuantityExpected = 3
      const questionsQuantity = customCustoms.countQuestions(answersData)

      assert.strictEqual(questionsQuantityExpected, questionsQuantity)
    })

    it('should return the quantity of questions that have yes answer even for a group composed of more than one person', function () {
      const answersData = [["abc", "aef", "agh"]]
      const questionsQuantityExpected = 1
      const questionsQuantity = customCustoms.countQuestions(answersData)

      assert.strictEqual(questionsQuantityExpected, questionsQuantity)
    })

    it('should return the quantity of questions that have yes answer by each group', function () {
      const answersData = [["abc"], ["aef", "agh", "aij"]]
      const questionsQuantityExpected = 4
      const questionsQuantity = customCustoms.countQuestions(answersData)

      assert.strictEqual(questionsQuantityExpected, questionsQuantity)
    })
  })
})