const fs = require('fs')
const binaryBoarding = require('./binaryBoarding')

const boardingPassesInput = fs.readFileSync('boarding-passes-input').toString().split('\n')
const seatsIds = []

for(let i = 0; i < boardingPassesInput.length; i++) {
  const boardingPass = boardingPassesInput[i]
  seatId = binaryBoarding.generateSeatId(boardingPass)
  seatsIds.push(seatId)
}
console.log(Math.max.apply(Math, seatsIds))