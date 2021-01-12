const sanitize = (handyHaversacksInput) => {
  const handyHaversacks = []

  handyHaversacksInput.forEach(handyHaversack => {
    const handyHaversackSanitized = handyHaversack.replace(/ bag(s)?/gi, "").replace(/ \d/gi, "").replace(".", "")
    handyHaversacks.push(handyHaversackSanitized)
  })
  return handyHaversacks
}

const parse = (handyHaversacksInput) => {
  const handyHaversacks = sanitize(handyHaversacksInput)
  const rules = new Map()

  handyHaversacks.forEach(handyHaversack => {
    const rule = handyHaversack.split(" contain ")
    if (rule[1] === "no other") {
      rule[1] = []
      rules.set(rule[0], rule[1])
    } else {
      rules.set(rule[0], rule[1].split(", "))
    }
  })
  return rules
}

module.exports = { sanitize, parse }