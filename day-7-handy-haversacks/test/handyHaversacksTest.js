const assert = require('assert')
const handyHaversacks = require('../handyHaversacks')

describe('HandyHaversacks', function() {
  describe('countBagColors', function() {
    it('should return zero bag colors given a rule that a bag not be able to contain other bags', function () {
      const rules = ["dotted black bags", "no other bags"]
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return zero bag colors given a rule that a bag not contains a shiny gold bag', function () {
      const rules = ["vibrant plum bags", "faded blue bags, 6 dotted black bags"]
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })

    it('should return bag colors quantity given a rule that a bag contains directly a shiny gold bag', function () {
      const rules = ["bright white bags", "1 shiny gold bag"]
      const bagColorsQuantityExpected = 1
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })
  })
})