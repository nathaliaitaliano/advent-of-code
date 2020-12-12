const validate = (passportData) => {
  return ((passportData.byr) && (passportData.iyr) && (passportData.eyr) && (passportData.hgt) && (passportData.hcl))
}

module.exports = { validate }