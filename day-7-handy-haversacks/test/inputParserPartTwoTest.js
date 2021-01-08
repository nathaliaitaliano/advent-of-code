const assert = require('assert')
const inputParser = require('../part-two/inputParserPartTwo')

describe('parse', function () {
  it('should return a map with a value equal to zero given a handy haversacks rule that does not contains another bag', function () {
    const handyHaversacksInput = ["dark violet bags contain no other bags."]
    const ruleExpected = new Map()
    ruleExpected.set("dark violet", [{ color: [], quantity: 0 }])
    const rule = inputParser.parse(handyHaversacksInput)

    assert.deepStrictEqual(ruleExpected, rule)
  })

  it('should return a map with the rules for a bag given a handy haversacks rule that contains just one bag', function () {
    const handyHaversacksInput = ["dark orange bags contain 2 dark yellow bags."]
    const ruleExpected = new Map()
    ruleExpected.set("dark orange", [{ color: "dark yellow", quantity: 2 }])
    const rule = inputParser.parse(handyHaversacksInput)

    assert.deepStrictEqual(ruleExpected, rule)
  })

  it('should return a map with the rules for a bag given a handy haversacks rule that contains more than one bag', function () {
    const handyHaversacksInput = ["muted yellow bags contain 2 shiny gold bags, 9 faded blue bags."]
    const ruleExpected = new Map()
    ruleExpected.set("muted yellow", [{ color: "shiny gold", quantity: 2 }, { color: "faded blue", quantity: 9 }])
    const rule = inputParser.parse(handyHaversacksInput)

    assert.deepStrictEqual(ruleExpected, rule)
  })

  it('should return a map with the rules for a bag given a handy haversacks rule that contains more than one bag', function () {
    const handyHaversacksInput = ["muted teal bags contain 4 striped chartreuse bags, 2 muted gold bags, 1 mirrored green bag, 5 dull orange bags."]
    const ruleExpected = new Map()
    ruleExpected.set("muted teal", [{ color: "striped chartreuse", quantity: 4 }, { color: "muted gold", quantity: 2 }, { color: "mirrored green", quantity: 1 }, { color: "dull orange", quantity: 5 }])
    const rule = inputParser.parse(handyHaversacksInput)

    assert.deepStrictEqual(ruleExpected, rule)
  })
})