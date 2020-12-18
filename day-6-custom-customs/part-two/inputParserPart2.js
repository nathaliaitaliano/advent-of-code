const sanitize = (answersInputData) => {
  let answersData = []
  let answerGroup = ""

  for ( let i = 0; i < answersInputData.length; i++)
    if ( answersInputData[i] === "")
    { 
      answersData = [""]
    }

  return answersData
}

module.exports = { sanitize }