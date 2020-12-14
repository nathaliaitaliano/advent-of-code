const { truncate } = require("fs/promises")

const validate = (passportFieldsData) => {
  const birthYear = passportFieldsData.byr
  const issueYear = passportFieldsData.iyr
  const expirationYear = passportFieldsData.eyr
  const height = passportFieldsData.hgt
  const hairColor = passportFieldsData.hcl
  const eyeColor = passportFieldsData.ecl
  const passportId = passportFieldsData.pid
  const countryID = passportFieldsData.cid

  const validateBirthYear = (birthYear) => {
    if (birthYear && birthYear.toString().length === 4 && 1920 <= birthYear && birthYear <= 2002) {
      return true
    }
    return false
  }

  const validateIssueYear = (issueYear) => {
    if (issueYear && issueYear.toString().length === 4 && 2010 <= issueYear && issueYear <= 2020) {
      return true
    }
    return false
  }

  const validateExpirationYear = (expirationYear) => {
    if (expirationYear && expirationYear.toString().length === 4 && 2020 <= expirationYear && expirationYear <= 2030) {
      return true
    }
    return false
  }

  const validateHeight = (height) => {
    if (height) {
      const heightInCentimeters = Number(height.replace("cm", ""))
      const heightInInches = Number(height.replace("in", ""))
      
      if (height.includes("cm") && 150 <= heightInCentimeters && heightInCentimeters <= 193) {
        return true
      }
      if (height.includes("in")) {
        return true
      }
    }
    return false
  }

  const validateHairColor = (hairColor) => {
    if (hairColor) {
      return true
    }
    return false
  }

  const validateEyeColor = (eyeColor) => {
    if (eyeColor) {
      const colorsPossibilities = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
      for (let i = 0; i < colorsPossibilities.length; i++) {
        if (eyeColor === colorsPossibilities[i]) {
          return true
        }
      }
      return false
    }
  }

  const validatePassportID = (validatePassportID) => {
    if (passportId && passportId.toString().length === 9) {
      return true
    }
    return false
  }

  const validateCountryID = (countryId) => {
    if (countryID || !countryID) {
      return true
    }
    return false
  }

  return (
    validateBirthYear(birthYear) &&
    validateIssueYear(issueYear) &&
    validateExpirationYear(expirationYear) &&
    validateHeight(height) &&
    validateHairColor(hairColor) &&
    validateEyeColor(eyeColor) &&
    validatePassportID(passportId) &&
    validateCountryID(countryID)
  )
}

module.exports = { validate }