const assert = require('assert')
const handyHaversacks = require('../part-one/handyHaversacks')

describe('HandyHaversacks', function () {
  describe('countBagColors', function () {
    it('should return zero bag colors given a rule that a bag not be able to contain other bags', function () {
      const rules = new Map()
      rules.set("dotted black", [])
      const targetBag = "shiny gold"
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules, targetBag)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return zero bag colors given a rule that a bag not contains a shiny gold bag', function () {
      const rules = new Map()
      rules.set("vibrant plum", ["faded blue", "dotted black"])
      rules.set("faded blue", ["dotted black"])
      rules.set("dotted black", [])

      const targetBag = "shiny gold"
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules, targetBag)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return bag colors quantity given a rule that a bag contains directly a shiny gold bag', function () {
      const rules = new Map
      rules.set("bright white", ["shiny gold"])
      const targetBag = "shiny gold"
      const bagColorsQuantityExpected = 1
      const bagColorsQuantity = handyHaversacks.countBagColors(rules, targetBag)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return bag colors quantity given a rule that a bag contains indirectly a shiny gold bag', function () {
      const rules = new Map()
      rules.set("bright white", ["shiny gold"])
      rules.set("dotted black", [])
      rules.set("dark orange", ["bright white"])
      let targetBag = "shiny gold"
      const bagColorsQuantityExpected = 2
      const bagColorsQuantity = handyHaversacks.countBagColors(rules, targetBag)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })
  })
})