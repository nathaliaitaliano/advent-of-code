const parse = (inputData) => {
  const passwordData = inputData.replace("-", " ").replace(":", " ").split(" ")
  const letterMinQuantityExpected = Number(passwordData[0])
  const letterMaxQuantityExpected = Number(passwordData[1])
  const letterExpected = passwordData[2]



  return {
    letterMinQuantityExpected,
    letterMaxQuantityExpected,
    letterExpected
  }

}

module.exports = { parse }