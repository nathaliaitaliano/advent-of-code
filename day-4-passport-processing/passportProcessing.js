const validate = (passportData) => {
  return ((passportData.byr) && (passportData.iyr) && (passportData.pid))
}

module.exports = { validate }