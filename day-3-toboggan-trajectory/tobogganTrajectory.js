const countTrees = (map) => {
  let treesQuantity = 0
  let column = 0

  for (let i = 1; i < map.length; i++) {
    column = column + 3
    let toboggan = map[i].charAt(column)

    if (toboggan === "#") {
      treesQuantity += 1
    }
  }
  return treesQuantity
}

module.exports = { countTrees }