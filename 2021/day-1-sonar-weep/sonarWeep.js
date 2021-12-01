const findMeasurements = (entries) => {
  let measurements = 0

  entries.forEach((measurement, index) => { if(measurement > entries[index - 1]) measurements++ })

  return measurements
}

module.exports = { findMeasurements }