const sanitize = (handyHaversacksInput) => {
  let handyHaversacks = []

  handyHaversacksInput.forEach(handyHaversack => {
    const handyHaversackSanitized = handyHaversack.replace(/ bag(s)?/gi, "")
    handyHaversacks.push(handyHaversackSanitized)
  })
  return handyHaversacks
}

const parse = (handyHaversacksInput) => {
  const handyHaversacks = sanitize(handyHaversacksInput)
  let rules = []

  handyHaversacks.forEach(handyHaversack => {
    const rule = handyHaversack.split(" contain ")
    rules.push(rule)
  })
  return rules
}

module.exports = { sanitize, parse }