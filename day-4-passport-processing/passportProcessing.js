const validatePassport = (passportData) => {
  return (passportData.byr === true)
}

module.exports = { validatePassport }