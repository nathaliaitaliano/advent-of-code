const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

const findSeatRowCoordinate = (boardingPass) => {
  const rowReference = boardingPass.substr(boardingPass, 7)
  let row = 0

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
  const columnReference = boardingPass.substr(boardingPass.length - 3, 3)
  let column = 0

  for (let i = 0; i < columnReference.length; i++) {
    if (i === 0 && columnReference[i] === "R") {
      column = [Math.ceil((rangeColumnsInitial()[1] - rangeColumnsInitial()[0]) / 2 + rangeColumnsInitial()[0]), rangeColumnsInitial()[1]]
    }
    if (i != 0 && columnReference[i] === "R") {
      column = [Math.ceil((column[1] - column[0]) / 2 + column[0]), column[1]]
    }
    if (i === 2 && columnReference[i] === "R") {
      column = Math.max.apply(Math, column)
    }
    if (i === 0 && columnReference[i] === "L") {
      column = [rangeColumnsInitial()[0], Math.floor((rangeColumnsInitial()[1] - rangeColumnsInitial()[0]) / 2 + rangeColumnsInitial()[0])]
    }
    if (i != 0 && columnReference[i] === "L") {
      column = [column[0], Math.floor((column[1] - column[0]) / 2 + column[0])]
    }
    if (i === 2 && columnReference[i] === "L") {
      column = Math.min.apply(Math, column)
    }
  }
  return column
}

module.exports = { rangeRowsInitial, rangeColumnsInitial, findSeatRowCoordinate, findSeatColumnCoordinate }