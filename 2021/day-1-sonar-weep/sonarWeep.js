const findMeasurements = (entries) => {
  if(entries == null || entries.length == 0) return null

  if(entries.length == 1) return 0

  let measurements = 0

  entries.forEach(compareMeasurement = (measurement, index, entries) =>
  {
    if(measurement > entries[index - 1]) measurements++
  })

  return measurements
}

module.exports = { findMeasurements }