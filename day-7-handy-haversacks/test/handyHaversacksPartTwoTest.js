const assert = require('assert')
const handyHaversacks = require('../part-two/handyHaversacksPartTwo')

describe('HandyHaversacks', function () {
  describe('countBags', function () {
    it('should return 0 for a quantity of bags that a shiny gold bag require inside given a rule where a shiny gold bag not contains another bag', function () {
      const rules = { "shiny gold": [{ color: [], quantity: 0 }] }
      const bagsQuantityExpected = 0
      const bagsQuantity = handyHaversacks.countBags(rules)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })

    it('should return 2 for a quantity of bags that a shiny gold bag require inside given a rule where a shiny gold bag contains just one bag', function () {
      const rules = { "shiny gold": [{ color: "dark red", quantity: 1 }], "dark red": [{ color: "dark orange", quantity: 1 }], "dark orange": [{ color: [], quantity: 0 }] }
      const bagsQuantityExpected = 2
      const bagsQuantity = handyHaversacks.countBags(rules)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })
  })
})