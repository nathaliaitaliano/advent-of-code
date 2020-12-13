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
  let passportsData = []
  let fieldsPassportData = ""

  for (let i = 0; i < inputData.length; i++) {
    if (inputData[i] !== "") {
      fieldsPassportData += ` ${inputData[i]}`
    }
    if ((inputData[i] === "") || (i === inputData.length - 1)) {
      passportsData.push(fieldsPassportData.trim())
      fieldsPassportData = ""
    }
  }

  return passportsData
}

module.exports = { parse, sanitize }