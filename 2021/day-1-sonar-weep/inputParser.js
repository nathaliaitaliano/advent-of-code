const fs = require('fs')

const parse= (entries) => {
  return fs.readFileSync(entries).toString().split('\n').map((measurement) => parseInt(measurement, 10))
}

module.exports = { parse }