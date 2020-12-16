const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

const findSeatCoordinates = (boardingPasses) => {
  let row = []

  for (let i = 0; i < boardingPasses.length; i++) {
    if (i === 0 && boardingPasses[i] === "F") {
      row = [rangeRowsInitial()[0], Math.floor((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
    }
    if (i === 0 && boardingPasses[i] === "B") {
      row = [rangeRowsInitial()[0], Math.ceil((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
    } 
    if(i != 0 && boardingPasses[i] === "B") {
      row = [Math.ceil((row[1] - row[0]) / 2), row[1]]
    }
  }
    return row
}

const generateSeatId = (row, colum) => {

}

module.exports = { rangeRowsInitial, rangeColumnsInitial, findSeatCoordinates, generateSeatId }