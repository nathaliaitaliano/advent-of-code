const countBagColors = (rules) => {
  const bagsToSearch = ["shiny gold"]

  rules.forEach(rule => {
    bagsToSearch.forEach(bag => {
      if (rule[1].includes(bag) && !bagsToSearch.includes(rule[0])) {
          bagsToSearch.push(rule[0])
      }
      
    })
  })
  return bagsToSearch.length -1
}

module.exports = { countBagColors }