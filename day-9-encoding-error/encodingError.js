const findFirstInvalidNumber = (encodingErrorInput, preambleNumbersQuantity) => {
  for (let i = preambleNumbersQuantity; i < encodingErrorInput.length; i++) {
    let sumPreamblePairsPosibles = [];
    for (let j = i - preambleNumbersQuantity; j < i; j++) {
      let nextNumberIndex = j + 1;

      while (nextNumberIndex < j + preambleNumbersQuantity) {
        const sum = encodingErrorInput[j] + encodingErrorInput[nextNumberIndex];
        sumPreamblePairsPosibles.push(sum);
        nextNumberIndex++
      }
      nextNumberIndex = j + 1;
    }
    if (!sumPreamblePairsPosibles.includes(encodingErrorInput[i])) return encodingErrorInput[i];
    sumPreamblePairsPosibles = [];
  }
}

module.exports = { findFirstInvalidNumber }