const binaryDiagnostic = require('./binaryDiagnostic')
const parser = require ('./parser')
const entries = parser.parse('entries-input')

const diagnostic = binaryDiagnostic.generateDiagnostic(entries)

console.log(parser.parseToDecimal(diagnostic.gammaRate) * parser.parseToDecimal(diagnostic.epilsonRate))
