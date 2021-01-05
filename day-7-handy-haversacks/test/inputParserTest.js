const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should remove the bag and bags words with one space before them, given a handy haversacks input with one line', function () {
      const handyHaversacksInput = ["light red bags contain 1 bright white bag, 2 muted yellow bags"]
      const handyHaversacksExpected = ["light red contain bright white, muted yellow"]
      const handyHaversacks = inputParser.sanitize(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })

    it('should remove the bag and bags words with one space before them, given a handy haversacks input with multiples lines', function () {
      const handyHaversacksInput = ["light red bags contain 1 bright white bag, 2 muted yellow bags", "dark orange bags contain 3 bright white bags, 4 muted yellow bags", "bright white bags contain 1 shiny gold bag", "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags"]
      const handyHaversacksExpected = ["light red contain bright white, muted yellow", "dark orange contain bright white, muted yellow", "bright white contain shiny gold", "muted yellow contain shiny gold, faded blue"]
      const handyHaversacks = inputParser.sanitize(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })
  })

  describe('parse', function () {
    it('should return an array with two elements (bag color, bags colors able to contain) given a one only rule data', function () {
      const handyHaversacksInput = ["light red bags contain 1 bright white bag, 2 muted yellow bags"]
      const handyHaversacksExpected = new Map()
      handyHaversacksExpected.set("light red", ["bright white", "muted yellow"])
      const handyHaversacks = inputParser.parse(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })

    it('should return an array with two elements (bag color, bags colors able to contain) given a rule that does not contains another bag', function () {
      const handyHaversacksInput = ["dotted black bag contain no other"]
      const handyHaversacksExpected = new Map()
      handyHaversacksExpected.set("dotted black", [])
      const handyHaversacks = inputParser.parse(handyHaversacksInput)

      assert.deepStrictEqual(handyHaversacksExpected, handyHaversacks)
    })
  })
})