const assert = require('assert')
const handyHaversacks = require('../handyHaversacks')

describe('HandyHaversacks', function() {
  describe('countBagColors', function() {
    it('should return zero bag colors given a rule that a bag not be able to contain other bags', function () {
      const rules = ["dotted black", "no other"]
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return zero bag colors given a rule that a bag not contains a shiny gold bag', function () {
      const rules = [["vibrant plum", "faded blue, 6 dotted black"]]
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return bag colors quantity given a rule that a bag contains directly a shiny gold bag', function () {
      const rules = [["bright white", "1 shiny gold"]]
      const bagColorsQuantityExpected = 1
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return bag colors quantity given a rule that a bag contains indirectly a shiny gold bag', function () {
      const rules = [["bright white", "1 shiny gold bag"], ["dark orange", "3 bright white, 4 muted yellow"]]
      const bagColorsQuantityExpected = 2
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return bag colors quantity total given a rule input that a bag contains indirectly a shiny gold bag', function () {
      const rules = [["muted yellow", "2 shiny gold, 9 faded blue"], ["bright white", "1 shiny gold"], ["dark orange", "3 bright white, 4 muted yellow"], ["light red", "1 bright white, 2 muted yellow"]]
      const bagColorsQuantityExpected = 4
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })
  })
})