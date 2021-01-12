const fs = require('fs')
const inputParser = require('../part-two/inputParserPartTwo')
const handyHaversacks = require('../part-two/handyHaversacksPartTwo')

const handyHaversacksInput = fs.readFileSync('handy-haversacks-input').toString().split('\n')
const rules = inputParser.parse(handyHaversacksInput)
const bagsQuantity = handyHaversacks.countBags(rules, "shiny gold")
console.log(bagsQuantity)