const validate = (passportData) => {
  const birthYear = passportData.byr
  const issueYear = passportData.iyr
  const expirationYear = passportData.eyr
  const height = passportData.hgt
  const hairColor = passportData.hcl
  const eyeColor = passportData.ecl
  const passportId = passportData.pid

  return ((birthYear) && (issueYear) && (expirationYear) && (height) && (hairColor) && (eyeColor) && (passportId))
}

module.exports = { validate }