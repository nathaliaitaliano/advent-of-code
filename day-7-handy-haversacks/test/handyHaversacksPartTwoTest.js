const assert = require('assert')
const handyHaversacks = require('../part-two/handyHaversacksPartTwo')

describe('HandyHaversacks', function () {
  describe('countBags', function () {
    it('should return the quantity of bags that a shiny gold bag require inside given a rule where a shiny gold bag not contains another bag', function () {
      const rules = { "shiny gold": [] }
      const targetBag = "shiny gold"
      const bagsQuantityExpected = 0
      const bagsQuantity = handyHaversacks.countBags(rules, targetBag)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })

    it('should return the quantity of bags that a shiny gold bag require inside given a rule where a shiny gold bag contains another bag', function () {
      const rules = {
        "shiny gold": [{ color: "dark orange", quantity: 1 }, { color: "dark red", quantity: 2 }],
        "dark orange": [],
        "dark red": []
      }
      const targetBag = "shiny gold"
      const bagsQuantityExpected = 3
      const bagsQuantity = handyHaversacks.countBags(rules, targetBag)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })

    it('should return the quantity of bags that a shiny gold bag require inside given a rule where a shiny gold bag contains another bag', function () {
      const rules = {
        "shiny gold": [{ color: "dark red", quantity: 4 }],
        "dark red": [{ color: "dark orange", quantity: 2 }],
        "dark orange": []
      }
      const targetBag = "shiny gold"
      const bagsQuantityExpected = 12
      const bagsQuantity = handyHaversacks.countBags(rules, targetBag)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })

    it('should return the quantity of bags that a shiny gold bag require inside given a rule where a shiny gold bag contains multiple bags', function () {
      const rules = {
        "shiny gold": [{ color: "dark red", quantity: 2 }],
        "dark red": [{ color: "dark blue", quantity: 3 }],
        "dark green": [{ color: "dark orange", quantity: 10 }],
        "dark orange": [],
        "dark blue": []
      }
      const targetBag = "shiny gold"
      const bagsQuantityExpected = 8
      const bagsQuantity = handyHaversacks.countBags(rules, targetBag)

      assert.strictEqual(bagsQuantityExpected, bagsQuantity)
    })
  })
})