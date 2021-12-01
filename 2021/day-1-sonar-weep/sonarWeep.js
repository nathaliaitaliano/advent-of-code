const findMeasurements = (entries) => {
  let measurements = 0

  if(entries == null || entries.length == 0) return null
  if(entries.length == 1) return 0

  for(let i = 0; i <= entries.length; i++) {
    const currentMeasurement = entries[i]
    const previousMeasurement = entries[i - 1]

    if(currentMeasurement > previousMeasurement) measurements ++
  }

  return measurements
}

module.exports = { findMeasurements }