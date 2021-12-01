const fs = require('fs')

const parse= (entries) => {
  return fs.readFileSync(entries).toString().split('\n').map(Number)
}

module.exports = { parse }