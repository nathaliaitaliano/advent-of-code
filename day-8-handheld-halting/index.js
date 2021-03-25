const fs = require('fs');
const handheldHalting = require('./handheldHalting');
const inputParser = require('./inputParser');

const instructionsInput = fs.readFileSync('boot-instructions-input').toString().split('\n');
const instructions = inputParser.parse(instructionsInput);