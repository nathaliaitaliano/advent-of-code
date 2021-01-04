const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should remove the bag and bags words with one space before them, given a handy haversacks input with one line', function () {
      const handyHaversacksInput = ["light red bags contain 1 bright white bag, 2 muted yellow bags"]
      const handyHaversacksExpected = ["light red contain 1 bright white, 2 muted yellow"]
      const handyHaversacks = inputParser.sanitize(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })

    it('should remove the bag and bags words with one space before them, given a handy haversacks input with multiples lines', function () {
      const handyHaversacksInput = ["light red bags contain 1 bright white bag, 2 muted yellow bags", "dark orange bags contain 3 bright white bags, 4 muted yellow bags", "bright white bags contain 1 shiny gold bag", "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags"]
      const handyHaversacksExpected = ["light red contain 1 bright white, 2 muted yellow", "dark orange contain 3 bright white, 4 muted yellow", "bright white contain 1 shiny gold", "muted yellow contain 2 shiny gold, 9 faded blue"]
      const handyHaversacks = inputParser.sanitize(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })
  })

  describe('parse', function () {
    it.only('should return an array with two elements (bag color, bags colors able to contain) given a one only rule data', function () {
      const handyHaversacksInput = ["light red bags contain 1 bright white bag, 2 muted yellow bags"]
      const handyHaversacksExpected = new Map()
      handyHaversacksExpected.set("light red", "1 bright white, 2 muted yellow")
      const handyHaversacks = inputParser.parse(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })
  })
})