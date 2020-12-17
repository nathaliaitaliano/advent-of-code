const count = (groupAnswers) => {
  const alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "v", "x", "y", "z"]
  let yesAnswers = 0
  let questions = []

  for (let i = 0; i < groupAnswers.length; i++) {
    if (alphabetLetters.includes(groupAnswers[i])) {
      if (!questions.includes(groupAnswers[i])) {
        questions.push(groupAnswers[i])
        yesAnswers++
      }
    }
  }
  return yesAnswers
}

module.exports = { count }