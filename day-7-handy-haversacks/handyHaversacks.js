const countBagColors = (rules) => {
  const bagsToSearch = ["shiny gold"]

  rules.forEach(rule => {
    bagsToSearch.forEach(bag => {
      if (rule[1].includes(bag) && !bagsToSearch.includes(rule[0])) {
          bagsToSearch.push(rule[0])
      }

    })
  })
  bagsToSearch.shift()
  return bagsToSearch.length
}

module.exports = { countBagColors }