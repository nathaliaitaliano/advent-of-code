const countTrees = (map) => {
  let count = 0
  const trees = map[1]

  if (trees.charAt(2) === "#") {
    count += 1
  }
  return count
}

module.exports = { countTrees }