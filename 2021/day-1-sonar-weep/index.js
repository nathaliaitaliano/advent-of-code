const sonarWeep = require('./sonarWeep')
const sonarWeepPartTwo = require('./sonarWeepPartTwo')
const inputParser = require ('./inputParser')
const entries = inputParser.parse('entries-input')

var measurements = sonarWeep.findMeasurements(entries)
var threeSumWindowMesurements = sonarWeepPartTwo.findSumMeasurements(entries);

console.log(measurements)
console.log(threeSumWindowMesurements)