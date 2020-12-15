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
  const fieldsObjectsNumberRequired = ["byr", "iyr", "eyr", "cid"]
  const passportsFieldsData = passportsData.split(" ")
  let passportFieldsInformation = {}

  for (let i = 0; i < passportsFieldsData.length; i++) {
    const [field, value] = passportsFieldsData[i].split(":")
    if (fieldsObjectsNumberRequired.includes(field)) {
      passportFieldsInformation[field] = Number(value)
    } else {
      passportFieldsInformation[field] = value
    }
  }
  return passportFieldsInformation
}

module.exports = { parse, sanitize }