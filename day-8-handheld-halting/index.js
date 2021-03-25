const fs = require('fs');
const inputParser = require('./inputParser');
const handheldHalting = require('./handheldHalting');

const instructionsInput = fs.readFileSync('boot-instructions-input').toString().split('\n');
const instructions = inputParser.parse(instructionsInput);
const accumulator = handheldHalting.calculateAccumulatorValue(instructions);
console.log(accumulator);