const sanitize = (passportsInputData) => {
  let passportsData = []
  let fieldsPassportData = ""

  for (let i = 0; i < passportsInputData.length; i++) {
    if (passportsInputData[i] !== "") {
      fieldsPassportData += ` ${passportsInputData[i]}`
    }
    if ((passportsInputData[i] === "") || (i === passportsInputData.length - 1)) {
      passportsData.push(fieldsPassportData.trim())
      fieldsPassportData = ""
    }
  }

  return passportsData
}

const parse = (passportsData) => {
  const passportsFieldsData = passportsData.split(" ")
  let passportFieldsInformation = {}

  for (let i = 0; i < passportsFieldsData.length; i++) {
    const passportDataInformation = passportsFieldsData[i].split(":")
    passportFieldsInformation[passportDataInformation[0]] = passportDataInformation[1]
  }
  return passportFieldsInformation
}

module.exports = { parse, sanitize }