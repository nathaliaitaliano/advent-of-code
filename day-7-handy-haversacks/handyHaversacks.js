const countBagColors = (rules) => {
  let bagColorsQuantity = 0
  const bagsToSearch = ["shiny gold"]

  rules.forEach(rule => {
    bagsToSearch.forEach(bag => {
      if (rule[1].includes(bag)) {
        bagsToSearch.push(rule[0])
        bagColorsQuantity++
      }
    })
  })
  return bagColorsQuantity
}

module.exports = { countBagColors }