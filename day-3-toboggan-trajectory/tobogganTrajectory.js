const countTrees = (map) => {
  let treesQuantity = 0
  let slopeCoordinate = 0

  for (let i = 1; i < map.length; i++) {
    slopeCoordinate = slopeCoordinate + 3
    let toboggan = map[i].charAt(slopeCoordinate)

    if (toboggan === "#") {
      treesQuantity += 1
    }
  }
  return treesQuantity
}

module.exports = { countTrees }