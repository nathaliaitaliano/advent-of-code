const count = (answers) => {
  const questions = []
  const isNewQuestion = answer => !questions.includes(answer)

  answers.forEach(answersGroup => {
    answersGroup.split("").forEach(answer => {
      if (isNewQuestion(answer)) {
        questions.push(answer)
      }
    })
  })
  return questions.length
}

module.exports = { count }