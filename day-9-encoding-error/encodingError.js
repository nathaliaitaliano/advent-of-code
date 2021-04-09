const findFirstInvalidNumber = (encodingErrorInput, preambleNumbersQuantity) => {
  const indexOfFirstNumberToVerify = preambleNumbersQuantity;

  for (let i = indexOfFirstNumberToVerify; i < encodingErrorInput.length; i++) {
    const numberToVerify = encodingErrorInput[i];
    const indexOfPreambleNumber = i - preambleNumbersQuantity;
    let sumPosibles = [];

    for (let j = indexOfPreambleNumber; j < i; j++) {
      let nextIndexOfPreambleNumber = j + 1;

      while (nextIndexOfPreambleNumber < j + preambleNumbersQuantity) {
        const currentPreambleNumber = encodingErrorInput[j];
        const nextPreambleNumberToSum = encodingErrorInput[nextIndexOfPreambleNumber];
        sumPosibles.push(currentPreambleNumber + nextPreambleNumberToSum);
        nextIndexOfPreambleNumber++
      }
    }
    if (!sumPosibles.includes(numberToVerify)) return numberToVerify;
  }
}

module.exports = { findFirstInvalidNumber }