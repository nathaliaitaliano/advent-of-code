const countQuestionsPerGroup = (answers) => {
  const anAnswer = answers.pop().split("")

  return anAnswer.filter(question => answers.every(answer => answer.includes(question))).length
}

const countQuestions = (allAnswers) => {
  let questionsQuantity = 0
  allAnswers.forEach(answers => {
    questionsQuantity += countQuestionsPerGroup(answers)
  })
  return questionsQuantity
}

module.exports = { countQuestions }