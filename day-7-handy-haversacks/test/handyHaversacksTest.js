const assert = require('assert')
const handyHaversacks = require('../handyHaversacks')

describe('HandyHaversacks', function() {
  describe('countBagColors', function() {
    it('should return zero bag colors given a rule that a bag not be able to contain other bags', function () {
      const rules = "dotted black bags contain no other bags."
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(rules)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })
  })
})