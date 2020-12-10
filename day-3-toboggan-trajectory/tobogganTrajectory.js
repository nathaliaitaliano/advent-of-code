const countTrees = (map) => {
  let treesQuantity = 0
  let slopeCoordinate = 0

  for (let i = 1; i < map.length; i++) {
    slopeCoordinate += 3

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