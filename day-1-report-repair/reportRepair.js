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

module.exports = { find };