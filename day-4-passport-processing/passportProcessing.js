const validate = (passportFieldsData) => {
  const birthYear = passportFieldsData.byr
  const issueYear = passportFieldsData.iyr
  const expirationYear = passportFieldsData.eyr
  const height = passportFieldsData.hgt
  const hairColor = passportFieldsData.hcl
  const eyeColor = passportFieldsData.ecl
  const passportId = passportFieldsData.pid

  const validateBirthYear = (birthYear) => {
    return ((birthYear) && (birthYear.toString().length === 4) && (1920 <= birthYear && birthYear <= 2002))
  }

  const validateIssueYear = (issueYear) => {
    return ((issueYear) && (issueYear.toString().length === 4) && (2010 <= issueYear && issueYear <= 2020))
  }

  const validateExpirationYear = (expirationYear) => {
    return ((expirationYear) && (expirationYear.toString().length === 4) && (2020 <= expirationYear && expirationYear <= 2030))
  }

  const validateHeight = (height) => {
    if (height) {
      const heightInCentimeters = Number(height.replace("cm", ""))
      const heightInInches = Number(height.replace("in", ""))
      
      if ((height.includes("cm")) && (150 <= heightInCentimeters && heightInCentimeters <= 193)) {
        return true
      }
      if ((height.includes("in")) && (59 <= heightInInches && heightInInches <= 76)) {
        return true
      }
    }
    return false
  }

  const validateHairColor = (hairColor) => {
    if (hairColor) {
      const hairColorCharacters = hairColor.split("")
      const charactersAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
      let hairColorValidCharacters = []

      for (let i = 1; i < hairColorCharacters.length; i++) {
        for (let k = 0; k < charactersAllowed.length; k++) {
          if (hairColorCharacters[i] === charactersAllowed[k]) {
            hairColorValidCharacters.push(hairColorCharacters[i])
          }
        }
      }

      return ((hairColorCharacters[0] === "#") && (hairColorValidCharacters.length === 6))
    }
  }

  const validateEyeColor = (eyeColor) => {
    if (eyeColor) {
      const colorsPossibilities = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
      return colorsPossibilities.includes(eyeColor)
    }
  }

  const validatePassportId = (passportId) => {
    return ((passportId) && (passportId.toString().length === 9))
  }

  return (
    validateBirthYear(birthYear) &&
    validateIssueYear(issueYear) &&
    validateExpirationYear(expirationYear) &&
    validateHeight(height) &&
    validateHairColor(hairColor) &&
    validateEyeColor(eyeColor) &&
    validatePassportId(passportId)
  )
}

module.exports = { validate }