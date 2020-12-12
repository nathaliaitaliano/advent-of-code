const validate = (passportData) => {
  return ((passportData.byr) && (passportData.iyr) && (passportData.eyr) && (passportData.hgt) && (passportData.hcl) && (passportData.ecl) && (passportData.pid))
}

module.exports = { validate }