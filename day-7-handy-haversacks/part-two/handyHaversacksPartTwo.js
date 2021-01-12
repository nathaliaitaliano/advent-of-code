const countBags = (rules, targetBag) => {
  let bagsQuantity = 0
  rules[targetBag].forEach(bagContent => {
    bagsQuantity += bagContent.quantity + (bagContent.quantity * countBags(rules, bagContent.color))
  })

  return bagsQuantity
}

module.exports = { countBags }