const sanitize = handyHaversacksInput => {
  const rules = []

  handyHaversacksInput.forEach(handyHaversackRule => {
    const rule = handyHaversackRule.replace(/ bag(s)?/gi, "").replace(".", "")
    rules.push(rule)
  })
  return rules
}

module.exports = { sanitize }