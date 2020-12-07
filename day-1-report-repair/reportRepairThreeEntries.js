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

const multiplyThreeEntries = entries => entries[0] * entries[1] * entries[2]

module.exports = { findThreeEntries, multiplyThreeEntries };