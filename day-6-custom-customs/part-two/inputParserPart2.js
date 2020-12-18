const sanitize = (answersInputData) => {
  let answersData = []
  let answersGroup = []

  for ( let i = 0; i < answersInputData.length; i++) {
    if ( answersInputData[i] === "")
    { 
      answersData = []
    }
    if (answersInputData[i] != "")
    {
      answersGroup.push(answersInputData[i])
      answersData.push(answersGroup)
    }
  }
  return answersData
}

module.exports = { sanitize }