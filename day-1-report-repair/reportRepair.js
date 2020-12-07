const find = (entries, sumResultExpected) => {
  if (entries.length == 0) return null;

  const sumResult = entries[0] + entries[1];
  if (sumResult === sumResultExpected) {
    return entries;
  }
  return null
}

module.exports = { find };