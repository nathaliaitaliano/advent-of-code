const fs = require('fs')

const parse = entries => fs.readFileSync(entries).toString().split('\n')

const parseToDecimal = binaryNumber => parseInt(rate, 2)

module.exports = { parse, parseToDecimal }