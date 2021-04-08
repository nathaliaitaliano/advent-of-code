const parser = input => {
  return input.map(encodingError => Number(encodingError));
}

const split = (input, preambleNumbersQuantity) => {
  const encodingErrorInput = parser(input);

  return {
    preambleNumbers: encodingErrorInput.slice(0, preambleNumbersQuantity),
    otherNumbers: encodingErrorInput.slice(preambleNumbersQuantity),
  }
}

module.exports = { split }