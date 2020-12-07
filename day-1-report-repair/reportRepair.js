const find = (entries, sumResultExpected) => {
  if (entries.length === 0) return null


  for (let i = 0; i < entries.length; i++) {
    for (let j = i+1; j < entries.length; j++) {
      const sumResult = entries[i] + entries[j];
      if (sumResult === sumResultExpected) {
        return [entries[i], entries[j]]
      }
    }
  }
  return null
}

const multiply = entries => {
  return entries[0] * entries[1];
}

module.exports = { find, multiply };