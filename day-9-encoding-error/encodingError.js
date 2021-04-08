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

  return encondingErrorInput.otherNumbers.find(otherNumber => otherNumber < maxSum && !sumPreamblePairsPosibles.includes(otherNumber));
}

module.exports = { invalidateNumber }