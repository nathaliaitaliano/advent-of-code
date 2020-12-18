const countQuestions = (answersData) => {
  let questionsQuantity = 0

  for (let i = 0; i < answersData.length; i++) {
    const answersGroup = answersData[i]
    if (answersData[i].length === 1) {
      questionsQuantity += answersGroup[0].split("").length
    }
    if (answersData[i] != 1) {
      let questions = []
      for (let k = 0; k < answersGroup.length; k++) {
        if (answersGroup[k].length != 1) {
          const answersPerson = answersGroup[k]
          let questionsToCompare = answersPerson[0]
          if (k != 0) {
            for (let j = 0; j < answersPerson.length; j++) {
              if (questionsToCompare.includes(answersPerson[j]) && !questions.includes(answersPerson[j])) {
                questions.push(answersPerson[j])
              }
            }
          }
        }
      }
      questionsQuantity += questions.length
    }
  }
  return questionsQuantity
}

module.exports = { countQuestions }