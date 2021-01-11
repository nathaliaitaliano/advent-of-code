const countBags = rules => {
  let bagsQuantity = 0
  const bagsColors = Object.keys(rules)
  bagsColors.forEach(bag => {
    console.log(bag)
    bagsQuantity += rules[bag][0].quantity
  })
  return bagsQuantity
}

module.exports = { countBags }