const sanitize = (answersInputData) => {
  let answersData = []

  for (let i = 0; i < answersInputData.length; i++) {
    if (answersInputData[i] != "") {
      answersData.push(answersInputData[i])
    }
  }
  return answersData
}

module.exports = { sanitize }