const invalidateNumber = encondingErrorInput => {

const sum = encondingErrorInput.preambleNumbers.reduce(reducer);
if(sum !== encondingErrorInput.otherNumbers[0]) return encondingErrorInput.otherNumbers[0];
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

module.exports = { invalidateNumber }