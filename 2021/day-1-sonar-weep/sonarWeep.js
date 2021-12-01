const findMeasurements = (entries) => entries.reduce((measurements, measurement, index) => measurement > entries[index - 1] ? measurements + 1 : measurements, 0)

module.exports = { findMeasurements }