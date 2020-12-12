const validate = (passportData) => {
  return ((passportData.byr) && (passportData.iyr))
}

module.exports = { validate }