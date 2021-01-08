const assert = require('assert')
const inputParser = require('../part-two/inputParserPartTwo')

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should return a rule without bag(s) words and dots given a handy haversacks rule input data', function () {
      const handyHaversacksInput = ["shiny gold bags contain 2 dark red bags."]
      const ruleExpected = ["shiny gold contain 2 dark red"]
      const rule = inputParser.sanitize(handyHaversacksInput)

      assert.deepStrictEqual(ruleExpected, rule)
    })

    it('should return more than one rule without bag(s) words and dots given a gandy haversacks rules input data with multiple lines', function () {
      const handyHaversacksInput = ["shiny gold bags contain 2 dark red bags.", "dark red bags contain 2 dark orange bags."]
      const rulesExpected = ["shiny gold contain 2 dark red", "dark red contain 2 dark orange"]
      const rules = inputParser.sanitize(handyHaversacksInput)

      assert.deepStrictEqual(rulesExpected, rules)
    })
  })

  describe('parse', function () {
    it('should return a map with a value equal to zero given a handy haversacks rule that does not contains another bag', function () {
      const handyHaversacksInput = ["dark violet bags contain no other bags."]
      const ruleExpected = new Map()
      ruleExpected.set("dark violet", [{ bagContentColor: [], quantity: 0 }])
      const rule = inputParser.parse(handyHaversacksInput)

      assert.deepStrictEqual(ruleExpected, rule)
    })

    it('should return a map with the rules for a bag given a handy haversacks rule that contains just one bag', function () {
      const handyHaversacksInput = ["dark orange bags contain 2 dark yellow bags."]
      const ruleExpected = new Map()
      ruleExpected.set("dark orange", [{ bagContentColor: "dark yellow", quantity: 2 }])
      const rule = inputParser.parse(handyHaversacksInput)

      assert.deepStrictEqual(ruleExpected, rule)
    })

    it('should return a map with the rules for a bag given a handy haversacks rule that contains more then one bag', function () {
      const handyHaversacksInput = ["muted yellow bags contain 2 shiny gold bags, 9 faded blue bags."]
      const ruleExpected = new Map()
      ruleExpected.set("muted yellow", [{ bagContentColor: "shiny gold", quantity: 2 }, { bagContentColor: "faded blue", quantity: 9 }])
      const rule = inputParser.parse(handyHaversacksInput)

      assert.deepStrictEqual(ruleExpected, rule)
    })
  })
})
