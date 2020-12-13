const parse = (inputData) => {
  let passportsData = {}
  const passportFields = inputData.split(" ")

  for (let i = 0; i < passportFields.length; i++) {
    const passportDataInformation = passportFields[i].split(":")
    passportsData[passportDataInformation[0]] = passportDataInformation[1]
  }
  return passportsData
}

module.exports = { parse }