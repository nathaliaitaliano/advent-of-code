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
  let handyHaversacksRules = []

  handyHaversacks.forEach(handyHaversack => {
    const rule = handyHaversack.split(" contain ")
    handyHaversacksRules.push(rule)
  })
  return handyHaversacksRules
}

module.exports = { sanitize, parse }