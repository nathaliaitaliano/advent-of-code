const parse = input => {
  return input.map(encodingError => Number(encodingError));
}

module.exports = { parse }