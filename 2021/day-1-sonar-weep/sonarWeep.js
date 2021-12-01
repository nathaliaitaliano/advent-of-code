const findMeasurements = (entries) => {
  if(entries.length == 1 || entries[0] > entries[1]) return 0
  if(entries[0] < entries[1]) return 1
  return null
}

module.exports = { findMeasurements }