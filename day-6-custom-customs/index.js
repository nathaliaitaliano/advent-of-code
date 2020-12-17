const fs = require('fs')
const inputParser = require('./inputParser')
const customCustoms = require('./customCustoms')

const answersInputData = fs.readFileSync('custom-customs-input').toString().split('\n')
const answersData = inputParser.sanitize(answersInputData)
const yesAnswers = customCustoms.count(answersData)

console.log(answersData)
console.log(yesAnswers)