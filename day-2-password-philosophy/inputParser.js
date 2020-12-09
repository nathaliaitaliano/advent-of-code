const parse = (inputData) => {
  const passwordData = inputData.split("-")
  const letterMinQuantityExpected = parseInt(passwordData[0])
  const letterMaxQuantityExpected = parseInt(passwordData[1])

  return { 
    letterMinQuantityExpected,
    letterMaxQuantityExpected
  }

}

module.exports = { parse }