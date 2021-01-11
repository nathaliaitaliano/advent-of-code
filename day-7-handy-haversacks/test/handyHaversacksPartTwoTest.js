const assert = require('assert')
const handyHaversacks = require('../part-two/handyHaversacksPartTwo')

describe('HandyHaversacks', function () {
  describe('countBags', function () {
    it('should return 0 for a shiny gold bag that does not contains another bag', function () {
      const rule = { 'shiny gold': [{ color: [], quantity: 0 }] }
      const bagsQuantityExpected = 0
      const bagsQuantity = handyHaversacks.countBags(rule)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })
  })
})