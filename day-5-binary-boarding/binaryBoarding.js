const rangeRowsInitial = () => {
  return [0, 127]
}

const rangeColumnsInitial = () => {
  return [0, 7]
}

const findSeatCoordinates = (boardingPass) => {
  const rowReference = boardingPass.substr(0, 7)
  console.log(rowReference)
  let row = 0

  for (let i = 0; i < rowReference.length; i++) {
    if (i === 0 && rowReference[i] === "F") {
      row = [rangeRowsInitial()[0], Math.floor((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
      console.log(row)
    }

    if (i != 0 && rowReference[i] === "F") {
      row = [row[0], Math.floor((row[1] - row[0]) / 2) + row[0]]
      console.log(row)
    }

    if (i ===  6 && rowReference[i] === "F") {
      row = Math.min.apply(Math, row)
      console.log(row)
    }

    if (i === 0 && rowReference[i] === "B") {
      row = [rangeRowsInitial()[0], Math.ceil((rangeRowsInitial()[1] - rangeRowsInitial()[0]) / 2)]
      console.log(row)
    }
    if(i != 0 && rowReference[i] === "B") {
      row = [Math.ceil((row[1] - row[0]) / 2) + row[0], row[1]]
      console.log(row)
    }
    if (i === 6 && rowReference[i] === "B") {
      row = Math.max.apply(Math, row)
      console.log(row)
    }
  }
    return row
}

const generateSeatId = (row, colum) => {

}

module.exports = { rangeRowsInitial, rangeColumnsInitial, findSeatCoordinates, generateSeatId }