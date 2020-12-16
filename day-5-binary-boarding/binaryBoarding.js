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
      console.log(row)
    }
    if (i != 0 && boardingPasses[i] === "F") {
      row = [row[0], Math.floor((row[1] - row[0]) / 2) + row[0]]
      console.log(row)
    }
    if (i === 0 && boardingPasses[i] === "B") {
      row = [rangeRowsInitial()[0], Math.ceil((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
      console.log(row)
    }
    if(i != 0 && boardingPasses[i] === "B") {
      row = [Math.ceil((row[1] - row[0]) / 2) + row[0], row[1]]
      console.log(row)
    }
  }
    return row
}

const generateSeatId = (row, colum) => {

}

module.exports = { rangeRowsInitial, rangeColumnsInitial, findSeatCoordinates, generateSeatId }