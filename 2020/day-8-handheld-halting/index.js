const fs = require('fs');
const inputParser = require('./inputParser');
const handheldHalting = require('./part-one/handheldHalting');
const handheldHaltingPartTwo = require('./part-two/handheldHaltingPartTwo');

const instructionsInput = fs.readFileSync('boot-instructions-input').toString().split('\n');
const instructions = inputParser.parse(instructionsInput);

const accumulator = handheldHalting.calculateAccumulatorValue(instructions);
console.log(accumulator);

const accumulatorForAFixedLoop = handheldHaltingPartTwo.calculateAccumulatorValue(instructions);
console.log(accumulatorForAFixedLoop);