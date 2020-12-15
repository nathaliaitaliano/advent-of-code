const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

const findSeatCoordinates = (boardingPasses) => {
  let row = []
  
  if (boardingPasses[0] === "F") {
    row = [rangeRowsInitial()[0], Math.floor((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
  }
  if  (boardingPasses[0] === "G") {
    row = [rangeRowsInitial()[0], Math.ceil((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
  }
  return row
}

const generateSeatId = (row, colum) =>{

}

module.exports = { rangeRowsInitial, rangeColumnsInitial, findSeatCoordinates, generateSeatId }