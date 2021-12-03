const dive = require('./dive')
const inputParser = require ('./inputParser')
const entries = inputParser.parse('entries-input')

const instructions = dive.calculatePositions(entries)

console.log(entries)
console.log(instructions)
console.log(instructions.horizontal * instructions.depth)