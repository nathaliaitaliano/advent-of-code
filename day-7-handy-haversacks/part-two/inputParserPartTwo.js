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
  const rules = new Map()

  handyHaversacks.forEach(handyHaversackRule => {
    const rule = handyHaversackRule.split(" contain ")

    if (rule[1] === "no other") {
      rule[1] = {
        bagContentColor: [],
        quantity: 0
      }
      rules.set(rule[0], rule[1])
    } else {
      rule[1] = {
        bagContentColor: rule[1].substring(2, rule[1].length),
        quantity: Number(rule[1].substring(0, 1))
      }
      rules.set(rule[0], rule[1])
    }
  })
  return rules
}

module.exports = { sanitize, parse }