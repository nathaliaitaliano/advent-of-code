const sonarWeep = require('./sonarWeep')
const inputParser = require ('./inputParser')
const entries = inputParser.parse('entries-input')

var measurements = sonarWeep.findMeasurements(entries)

console.log(measurements)