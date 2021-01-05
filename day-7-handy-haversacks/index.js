const fs = require('fs')
const inputParser = require('./inputParser')
const handyHaversacks = require('./handyHaversacks')

const handyHaversacksInput = fs.readFileSync('handy-haversacks-input').toString().split('\n')
const rules = inputParser.parse(handyHaversacksInput)
console.log(handyHaversacks.countBagColors(rules, "shiny gold"))