const countQuestions = (answers) => {
  for (let i = 0; i < answers.length; i++) {
    return answers[i].length
  }
}

module.exports = { countQuestions }