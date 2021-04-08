const fs = require('fs');
const parser = require('./parser');
const encodingError = require('./encodingError');

const input = fs.readFileSync('port-outputs-input').toString().split('\n');

const preambleNumbersQuantity = 25;
const encodingErrorInput = parser.parse(input);

const invalidNumber = encodingError.findFirstInvalidNumber(encodingErrorInput, preambleNumbersQuantity);
console.log(invalidNumber);