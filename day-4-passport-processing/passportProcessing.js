const validate = (passportData) => {
  return ((passportData.byr) && (passportData.iyr) && (passportData.eyr) &&(passportData.pid))
}

module.exports = { validate }