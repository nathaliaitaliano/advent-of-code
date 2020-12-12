const validatePassport = (passportData) => {
  return ((passportData.byr) && (passportData.iyr))
}

module.exports = { validatePassport }