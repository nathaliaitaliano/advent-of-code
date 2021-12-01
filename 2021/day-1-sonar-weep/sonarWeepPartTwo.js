const findSumMeasurements = (entries) => entries.reduce((measurements, measurement, index) => (measurement + entries[index + 1] + entries[index + 2]) < (entries[index + 1] + entries[index + 2] + entries[index + 3]) ? measurements + 1 : measurements, 0)

module.exports = { findSumMeasurements }