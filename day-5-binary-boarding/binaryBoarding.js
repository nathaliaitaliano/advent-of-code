const findSeatId = (boardingPasses) => {
  if (boardingPasses[0] === "F")
  return [0, 63]
}

const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

module.exports = { findSeatId, rangeRowsInitial, rangeColumnsInitial }