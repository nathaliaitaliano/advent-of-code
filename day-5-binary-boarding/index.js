const fs = require('fs')
const binaryBoarding = require('./binaryBoarding')

const boardingPassesInput = fs.readFileSync('boarding-passes-input').toString().split('\n')
const seatsIds = []
let mySeatId = 0

for (let i = 0; i < boardingPassesInput.length; i++) {
  const boardingPass = boardingPassesInput[i]
  seatId = binaryBoarding.generateSeatId(boardingPass)
  seatsIds.push(seatId)
}

for (let j = 0; j < Math.max.apply(Math, seatsIds); j++) {
  if (!seatsIds.includes(j)) {
    mySeatId = j
  }
}

console.log(Math.max.apply(Math, seatsIds))
console.log(mySeatId)