const sanitize = (answersInputData) => {
  let answersData = []
  let answerGroup = ""

  for (let i = 0; i < answersInputData.length; i++) {
    if (answersInputData[i] != "") {
      answerGroup += `${answersInputData[i]}`
    }
    if (answersInputData[i] === "" || i === answersInputData.length -1) {
      answersData.push(answerGroup.trim())
      answerGroup = ""
    }
  }
  return answersData
}

module.exports = { sanitize }