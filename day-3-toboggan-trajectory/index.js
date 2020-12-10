const fs = require('fs')
const tobogganTrajectory = require('./tobogganTrajectory')

const map = fs.readFileSync('map-input').toString().split('\n')

const treesQuantity = tobogganTrajectory.countTrees(map)

console.log(treesQuantity)