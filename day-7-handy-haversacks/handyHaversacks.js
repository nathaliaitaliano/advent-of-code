const countBagColors = (rules, targetBag) => {
  const bagContent = rules.values().next().value
  console.log(bagContent)
  if (bagContent.includes(targetBag)) return 1
  return 0
}

module.exports = { countBagColors }