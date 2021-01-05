const countBagColors = (rules, targetBag) => {
  const allBags = Array.from(rules.keys())

  return allBags.filter(bag => includesBag(rules, bag, targetBag)).length
}

const includesBag = (rules, bag, targetBag) => {
  const bagContent = rules.get(bag)

  return (bagContent.includes(targetBag) || bagContent.some(bag => includesBag(rules, bag, targetBag)))
}

module.exports = { countBagColors }