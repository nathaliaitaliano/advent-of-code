const fs = require('fs')
const inputParser = require('./inputParserPart2')
const customCustoms = require('./customCustomsPart2')

const answersInputData = fs.readFileSync('custom-customs-input').toString().split('\n')
console.log(answersInputData)
const answersData = inputParser.sanitize(answersInputData)
console.log(answersData)
const questionsQuantity = customCustoms.countQuestions(answersData)
console.log(questionsQuantity)

// console.log(questionsQuantity)
