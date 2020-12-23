const sanitize = (handyHaversacksInput) => {
  let handyHaversacks = []

  handyHaversacksInput.forEach(handyHaversack => {
   const handyHaversackSanitized = handyHaversack.replace(/ bag(s)?/gi, "")
    handyHaversacks.push(handyHaversackSanitized)
  })
  return handyHaversacks
}



module.exports = { sanitize }

// "\sbag(s)?.?"