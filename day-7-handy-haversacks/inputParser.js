const sanitize = (handyHaversacksInput) => {
  return handyHaversacksInput.replace(".", "")
}

module.exports = { sanitize }