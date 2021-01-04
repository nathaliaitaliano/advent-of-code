const assert = require('assert')
const handyHaversacks = require('../handyHaversacks')

describe('HandyHaversacks', function () {
  describe('countBagColors', function () {
    it.only('should return zero bag colors given a rule that a bag not be able to contain other bags', function () {
      const rules = new Map()
      rules.set("dotted black", "no other")
      const bag = "dotted black"
      const targetBag = "no other"
      const bagColorsQuantityExpected = 0
      const bagColorsQuantity = handyHaversacks.countBagColors(bag, targetBag)

      assert.strictEqual(bagColorsQuantityExpected, bagColorsQuantity)
    })
  })
})