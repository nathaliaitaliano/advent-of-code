const validate = (passportFieldsData) => {
  const birthYear = passportFieldsData.byr
  const issueYear = passportFieldsData.iyr
  const expirationYear = passportFieldsData.eyr
  const height = passportFieldsData.hgt
  const hairColor = passportFieldsData.hcl
  const eyeColor = passportFieldsData.ecl
  const passportId = passportFieldsData.pid

  return ((birthYear) && (issueYear) && (expirationYear) && (height) && (hairColor) && (eyeColor) && (passportId))
}

module.exports = { validate }