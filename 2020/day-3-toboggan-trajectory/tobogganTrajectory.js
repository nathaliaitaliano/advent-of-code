const countTrees = (map, xCoordinate = 3, yCoordinate = 1) => {

  let treesQuantity = 0
  let slopeCoordinate = 0

  for (let i = yCoordinate; i < map.length; i += yCoordinate) {
    slopeCoordinate += xCoordinate

    if (slopeCoordinate >= map[i].length) {
      slopeCoordinate -= map[i].length
    }

    let toboggan = map[i].charAt(slopeCoordinate)

    if (toboggan === "#") {
      treesQuantity += 1
    }
  }
  return treesQuantity
}

module.exports = { countTrees }