const fs = require('fs')
const tobogganTrajectory = require('./tobogganTrajectory')

const map = fs.readFileSync('map-input').toString().split('\n')
const coordinates = [
  { xCoordinate: 1, yCoordinate: 1 },
  { xCoordinate: 3, yCoordinate: 1 },
  { xCoordinate: 5, yCoordinate: 1 },
  { xCoordinate: 7, yCoordinate: 1 },
  { xCoordinate: 1, yCoordinate: 2 }]
let treesQuantity = 1

for (let i = 0; i < coordinates.length; i++) {
  treesQuantity *= (tobogganTrajectory.countTrees(map, coordinates[i].xCoordinate, coordinates[i].yCoordinate))
}

console.log(treesQuantity)