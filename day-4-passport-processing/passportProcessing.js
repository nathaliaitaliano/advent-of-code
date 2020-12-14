const validate = (passportFieldsData) => {
  const birthYear = passportFieldsData.byr
  const issueYear = passportFieldsData.iyr
  const expirationYear = passportFieldsData.eyr
  const height = passportFieldsData.hgt
  const hairColor = passportFieldsData.hcl
  const eyeColor = passportFieldsData.ecl
  const passportId = passportFieldsData.pid
  const countryID = passportFieldsData.cid

  return (
    (birthYear && birthYear.toString().length === 4 && 1920 <= birthYear && birthYear <= 2002) &&
    (issueYear && issueYear.toString().length === 4 && 2010 <= issueYear && issueYear <= 2020) &&
    (expirationYear && expirationYear.toString().length === 4 && 2020 <= expirationYear && expirationYear <= 2030) &&
    (height) &&
    (hairColor) &&
    (eyeColor && eyeColor === "amb" || eyeColor === "blu" || eyeColor === "brn" || eyeColor === "gry" || eyeColor === "grn" || eyeColor === "hzl" || eyeColor === "oth") &&
    (passportId && passportId.toString().length === 9)) &&
    (countryID || !countryID)
}

module.exports = { validate }