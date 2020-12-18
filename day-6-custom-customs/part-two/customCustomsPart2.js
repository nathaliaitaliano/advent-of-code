const countQuestions = (answers) => {
  let questionsQuantity = 0

  for (let i = 0; i < answers.length; i++) {
    const answersGroup = answers[i]
    if (answers[i].length === 1) {
      questionsQuantity += answersGroup[i].length
    }
    if (answers[i] != 1) {
      for (let k = 0; k < answersGroup.length; k++) {
        if (answersGroup[k].length != 1) {
          const answersPerson = answersGroup[k]
          let questions = []
          let questionsToCompare = answersPerson[0]
          if (k != 0) {
            for (let j = 0; j < answersPerson.length; j++) {
              if (questionsToCompare.includes(answersPerson[j]) && !questions.includes(answersPerson[j])) {
                questions.push(answersPerson[j])
              }
            }
            questionsQuantity = + questions.length
          }
        }
      }
    }
  }
  console.log(questionsQuantity)
  return questionsQuantity
}

module.exports = { countQuestions }