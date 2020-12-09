const fs = require('fs')
const passwordPhilosohy = require('./passwordPhilosophyPart2')
const inputParser = require('./inputParserPart2')

const inputDataContent = fs.readFileSync('input-passwords').toString().split('\n')
let validPasswords = 0

for (i = 0; i < inputDataContent.length; i++) {
  let passwordData
  let passwordDataAnalysis

  passwordData = inputParser.parse(inputDataContent[i])
  passwordDataAnalysis = passwordPhilosohy.analyse(passwordData.firstPositionExpected, passwordData.secondPositionExpected, passwordData.letter, passwordData.password)

  if (passwordDataAnalysis === true) {
    validPasswords += 1
  }
}
console.log(validPasswords)