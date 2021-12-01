const findTwoEntries = (entries, sumResultExpected) => {
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

const findThreeEntries = (entries, sumResultExpected) => {
  if (entries.length === 0) return null

  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      for (let k = j + 1; k < entries.length; k++) {
        const sumResult = entries[i] + entries[j] + entries[k]
        if (sumResult === sumResultExpected) {
          return [entries[i], entries[j], entries[k]]
        }
      }
    }
  }
  return null
}

const multiplyEntries = entries => {
  let multiplyResult = 1;
  for (let i = 0; i < entries.length; i++) {
    multiplyResult *= entries[i];
  }
  return multiplyResult;
}

module.exports = { findTwoEntries, findThreeEntries, multiplyEntries };