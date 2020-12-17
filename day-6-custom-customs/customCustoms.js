const count = (answers) => {
  let questions = []
  let yesAnswers = 0

  for (let i = 0; i < answers.length; i++) {
    let groupAnswers = answers[i]
    for (let k = 0; k < groupAnswers.length; k++) {
      if (!questions.includes(groupAnswers[k])) {
        questions.push(groupAnswers[k])
        yesAnswers++
      }
    }
    questions = []
  }
  return yesAnswers
}

module.exports = { count }