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
    const bag = rule[0]
    let bagContent = rule[1]

    if (bagContent === "no other") {
      bagContent = [{
        color: [],
        quantity: 0
      }]
      rules.set(bag, bagContent)
    } else {
      const bagContents = rule[1].split(", ")
      bagContent = []
      bagContents.forEach(bag =>
        bagContent.push({
          color: bag.substring(2, bag.length),
          quantity: Number(bag.substring(0, 1))
        })
      )
      rules.set(bag, bagContent)
    }
  })
  return rules
}

module.exports = { sanitize, parse }