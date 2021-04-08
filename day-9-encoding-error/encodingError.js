const invalidateNumber = encondingErrorInput => {
  const sumPreamblePairsPosibles = [];
  let invalidNumber = 0;

  encondingErrorInput.preambleNumbers.forEach(preambleNumber => {
    for (let i = 0; i < encondingErrorInput.preambleNumbers.length; i++) {
      if (preambleNumber !== encondingErrorInput.preambleNumbers[i]) {
        const sum = preambleNumber + encondingErrorInput.preambleNumbers[i];
        sumPreamblePairsPosibles.push(sum);
      }
    }
  })

  encondingErrorInput.otherNumbers.forEach(otherNumber => {
    if(!sumPreamblePairsPosibles.includes(otherNumber)) invalidNumber = otherNumber;
  })

  return invalidNumber;
}

module.exports = { invalidateNumber }