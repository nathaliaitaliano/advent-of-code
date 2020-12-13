const parse = (inputData) => {
  const passportInput = inputData.toString().split('\n')
  let passportsData = {}
  const passportFields = inputData.split(" ")

  for (let i = 0; i < passportFields.length; i++) {
    const passportDataInformation = passportFields[i].split(":")
    passportsData[passportDataInformation[0]] = passportDataInformation[1]
  }
  return passportsData
}

const sanitize = (inputData) => {
  return []
}

module.exports = { parse, sanitize }