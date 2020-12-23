const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should remove the final dots given an handy haversacks input', function () {
      const handyHaversacksInput = "light red bags contain 1 bright white bag, 2 muted yellow bags."
      const handyHaversacksExpected = "light red bags contain 1 bright white bag, 2 muted yellow bags"
      const handyHaversacks = inputParser.sanitize(handyHaversacksInput)

      assert.strictEqual(handyHaversacksExpected, handyHaversacks)
    })

    it('should remove the bags word given an handy haversacks input', function () {
      const handyHaversacksInput = "light red bags contain 1 bright white bag, 2 muted yellow bags."
      const handyHaversacksExpected = "light red contain 1 bright white bag, 2 muted yellow"
      const handyHaversacks = inputParser.sanitize(handyHaversacksInput)

      assert.strictEqual(handyHaversacksExpected, handyHaversacks)
    })
  })
})