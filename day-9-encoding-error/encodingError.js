const findFirstInvalidNumber = (encodingErrorInput, preambleNumbersQuantity) => {
  const indexOfNumberToVerify = preambleNumbersQuantity;

  for (let i = indexOfNumberToVerify; i < encodingErrorInput.length; i++) {
    let sumPosibles = [];
    const indexOfPreambleNumber = i - preambleNumbersQuantity;

    for (let j = indexOfPreambleNumber; j < i; j++) {
      let nextIndexOfPreambleNumber = j + 1;

      while (nextIndexOfPreambleNumber < j + preambleNumbersQuantity) {
        const sum = encodingErrorInput[j] + encodingErrorInput[nextIndexOfPreambleNumber];
        sumPosibles.push(sum);
        nextIndexOfPreambleNumber++
      }
    }
    if (!sumPosibles.includes(encodingErrorInput[i])) return encodingErrorInput[i];
    sumPreamblePairsPosibles = [];
  }
}

module.exports = { findFirstInvalidNumber }