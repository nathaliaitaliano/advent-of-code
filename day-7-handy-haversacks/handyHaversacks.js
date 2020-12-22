const countBagColors = (rules) => {
  let bagColorsQuantity = 0

  if(rules[1].includes("shiny gold")) {
    bagColorsQuantity++
  }
  return bagColorsQuantity
}

module.exports = { countBagColors }