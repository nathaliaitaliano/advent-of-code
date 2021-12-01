const findMeasurements = (entries) => {
  if(entries.length == 1 || entries[0] > entries[1]) return 0
  return null
}

module.exports = { findMeasurements }