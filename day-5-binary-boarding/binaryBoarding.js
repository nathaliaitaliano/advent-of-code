const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

const findSeatRowCoordinate = (boardingPass) => {
  const rowReference = boardingPass.substr(0, 7)
  // const columnReference = boardingPass.substr(7, 9)
  let row = 0
  let column = 0

  for (let i = 0; i < rowReference.length; i++) {
    if (i === 0 && rowReference[i] === "F") {
      row = [rangeRowsInitial()[0], Math.floor((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
    }
    if (i != 0 && rowReference[i] === "F") {
      row = [row[0], Math.floor((row[1] - row[0]) / 2) + row[0]]
    }
    if (i === 6 && rowReference[i] === "F") {
      row = Math.min.apply(Math, row)
    }
    if (i === 0 && rowReference[i] === "B") {
      row = [Math.ceil((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2 + rangeRowsInitial()[0]), rangeRowsInitial()[1]]
    }
    if (i != 0 && rowReference[i] === "B") {
      row = [Math.ceil((row[1] - row[0]) / 2) + row[0], row[1]]
    }
    if (i === 6 && rowReference[i] === "B") {
      row = Math.max.apply(Math, row)
    }
  }
  return row
}

const findSeatColumnCoordinate = (boardingPass) => {
  const columnReference = boardingPass
  // const columnReference = boardingPass.substr(7, 9)
  let column = 0

  for (let i = 0; i < columnReference.length; i++) {
    if (i === 0 && columnReference[i] === "R") {
      column = [Math.ceil((rangeColumnsInitial()[1] - rangeColumnsInitial()[0]) / 2 + rangeColumnsInitial()[0]), rangeColumnsInitial()[1]]
    }
  }
  return column
}

const generateSeatId = (row, colum) => {

}

module.exports = { rangeRowsInitial, rangeColumnsInitial, findSeatRowCoordinate, findSeatColumnCoordinate, generateSeatId }