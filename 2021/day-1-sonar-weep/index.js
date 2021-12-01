const fs = require('fs')
const sonarWeep = require('./sonarWeep')

const entries = fs.readFileSync('entries-input').toString().split('\n').map((measurement) => parseInt(measurement, 10))

var measurements = sonarWeep.findMeasurements(entries)

console.log(measurements)