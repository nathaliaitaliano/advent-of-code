const invalidateNumber = encondingErrorInput => {
  const sumPreamblePairsPosibles = [];

  encondingErrorInput.preambleNumbers.forEach(preambleNumber => {
    for (let i = 0; i < encondingErrorInput.preambleNumbers.length; i++) {
      if (preambleNumber !== encondingErrorInput.preambleNumbers[i]) {
        const sum = preambleNumber + encondingErrorInput.preambleNumbers[i];
        sumPreamblePairsPosibles.push(sum);
      }
    }
  })

  const maxSum = Math.max(...sumPreamblePairsPosibles);
  let invalidNumber = 0;

  encondingErrorInput.otherNumbers.forEach(otherNumber => {
    if (otherNumber < maxSum && !sumPreamblePairsPosibles.includes(otherNumber)) {
      invalidNumber = otherNumber;
    }
  })
  return invalidNumber;
}

module.exports = { invalidateNumber }