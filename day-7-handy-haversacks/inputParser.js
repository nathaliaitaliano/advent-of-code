const sanitize = (handyHaversacksInput) => {
  return handyHaversacksInput.replace(/ bag(s)?/gi, "").replace(".", "")
}

module.exports = { sanitize }

// "\sbag(s)?.?"