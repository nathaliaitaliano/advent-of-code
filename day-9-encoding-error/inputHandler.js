const parser = input => {
  return input.map(encodingError => Number(encodingError));
}

const split = (input, preambleNumbersQuantity) => {
  const encodingErrorInput = parser(input);

  return {
    preambleNumbers: encodingErrorInput.filter(number => encodingErrorInput.indexOf(number) <= preambleNumbersQuantity - 1),
    otherNumbers: encodingErrorInput.filter(number => encodingErrorInput.indexOf(number) > preambleNumbersQuantity - 1)
  }
}

module.exports = { parser, split }