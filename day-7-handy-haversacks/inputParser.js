const sanitize = (handyHaversacksInput) => {
  const handyHaversacks = []

  handyHaversacksInput.forEach(handyHaversack => {
    const handyHaversackSanitized = handyHaversack.replace(/ bag(s)?/gi, "")
    handyHaversacks.push(handyHaversackSanitized)
  })
  return handyHaversacks
}

const parse = (handyHaversacksInput) => {
  const handyHaversacks = sanitize(handyHaversacksInput)
  const rules = new Map()

  handyHaversacks.forEach(handyHaversack => {
    const rule = handyHaversack.split(" contain ")
    rules.set(rule[0], rule[1])
  })
  return rules
}

module.exports = { sanitize, parse }