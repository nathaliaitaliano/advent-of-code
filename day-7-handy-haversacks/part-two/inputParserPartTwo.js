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
      rule[1] = [{
        bagContentColor: [],
        quantity: 0
      }]
      rules.set(rule[0], rule[1])
    } else {
      const bagContents = rule[1].split(", ")
      rule[1] = []
      bagContents.forEach(bagContent =>
        rule[1].push({
          bagContentColor: bagContent.substring(2, bagContent.length),
          quantity: Number(bagContent.substring(0, 1))
        })
      )
      rules.set(rule[0], rule[1])
    }
  })
  return rules
}

module.exports = { sanitize, parse }