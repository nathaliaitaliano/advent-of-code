const fs = require('fs')
const inputParser = require('./inputParser')
const passportProcessing = require('./passportProcessing')

const passportsInputData = fs.readFileSync('passport-input').toString().split('\n')
const passportsData = inputParser.sanitize(passportsInputData)
let validPassports = 0;
console.log(passportsData)
for (let i = 0; i < passportsData.length; i++) {
  const passportsFieldsInformation = inputParser.parse(passportsData[i])
  if (passportProcessing.validate(passportsFieldsInformation)) {
    validPassports++
  } else {
    console.log(passportsFieldsInformation)
  }
  
}

console.log(validPassports)