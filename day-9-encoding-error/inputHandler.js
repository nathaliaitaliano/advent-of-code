const parser = input => {
  return input.map(encodingError => Number(encodingError));
}

module.exports = { parser }