const sanitize = (answersInputData) => {
  let answersData = []
  let answersGroup = []

  for (let i = 0; i < answersInputData.length; i++) {
    if (answersInputData[i] != "") {
      answersGroup.push(answersInputData[i])
    }
    if (answersInputData[i] === "" || i === answersInputData.length - 1) {
      answersData.push(answersGroup)
      answersGroup = []
    }
  }
  console.log(answersData)
  return answersData
}

module.exports = { sanitize }