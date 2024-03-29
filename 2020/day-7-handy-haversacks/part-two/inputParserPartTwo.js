const sanitize = handyHaversacksInput => {
  const rules = []

  handyHaversacksInput.forEach(handyHaversackRule => {
    const rule = handyHaversackRule.replace(/ bag(s)?/gi, "").replace(".", "")
    rules.push(rule)
  })
  return rules
}

const parse = handyHaversacksInput => {
  const handyHaversacks = sanitize(handyHaversacksInput)
  const rules = {}

  handyHaversacks.forEach(handyHaversackRule => {
    const rule = handyHaversackRule.split(" contain ")
    const bag = rule[0]
    const bagContent = parseBagContent(rule[1])
    rules[bag] = bagContent
  })
  return rules
}

const parseBagContent = content => {
  if (content === "no other") {
    return []
  }
  return content.split(", ").map(bag => ({
    color: bag.substring(2, bag.length),
    quantity: Number(bag.substring(0, 1))
  }))
}

module.exports = { parse }