const findSeatId = (boardingPasses) => {
  
  if (boardingPasses[0] === "F") {
    return [rangeRowsInitial()[0], Math.floor((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
  }
}

const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

module.exports = { findSeatId, rangeRowsInitial, rangeColumnsInitial }