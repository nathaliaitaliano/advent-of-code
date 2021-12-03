const dive = require('./dive')
const divePartTwo = require('./divePartTwo')
const inputParser = require ('./inputParser')
const entries = inputParser.parse('entries-input')

const instructions = dive.calculatePositions(entries)
const instructionsPartTwo = divePartTwo.calculatePositions(entries)

console.log(instructions.horizontal * instructions.depth)
console.log(instructionsPartTwo.horizontal * instructionsPartTwo.depth)