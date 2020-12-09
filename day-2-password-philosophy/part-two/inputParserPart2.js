const parse = (inputData) => {
  const passwordData = inputData.replace("-", " ").replace(":", "").split(" ")
  const firstPositionExpected = Number(passwordData[0])
  const secondPositionExpected = Number(passwordData[1])
  const letter = passwordData[2]
  const password = passwordData[3]



  return {
    firstPositionExpected,
    secondPositionExpected,
    letter,
    password
  }

}

module.exports = { parse }