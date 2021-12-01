const parse = (inputData) => {
  const passwordData = inputData.replace("-", " ").replace(":", "").split(" ")
  const letterMinQuantityExpected = Number(passwordData[0])
  const letterMaxQuantityExpected = Number(passwordData[1])
  const letter = passwordData[2]
  const password = passwordData[3]



  return {
    letterMinQuantityExpected,
    letterMaxQuantityExpected,
    letter,
    password
  }

}

module.exports = { parse }