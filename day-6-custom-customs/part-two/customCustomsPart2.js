const countQuestions = (answers) => {
  let questionsQuantity = 0

  for (let i = 0; i < answers.length; i++) {
    questionsQuantity += answers[i].length
  }
  return questionsQuantity
}

module.exports = { countQuestions }