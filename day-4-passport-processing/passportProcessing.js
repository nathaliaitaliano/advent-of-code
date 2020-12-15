const validate = (passportFieldsData) => {
  const birthYear = passportFieldsData.byr
  const issueYear = passportFieldsData.iyr
  const expirationYear = passportFieldsData.eyr
  const height = passportFieldsData.hgt
  const hairColor = passportFieldsData.hcl
  const eyeColor = passportFieldsData.ecl
  const passportId = passportFieldsData.pid

  const validateBirthYear = (birthYear) => {
    return birthYear && (1920 <= birthYear && birthYear <= 2002)
  }

  const validateIssueYear = (issueYear) => {
    return issueYear && (2010 <= issueYear && issueYear <= 2020)
  }

  const validateExpirationYear = (expirationYear) => {
    return expirationYear && (2020 <= expirationYear && expirationYear <= 2030)
  }

  const validateHeight = (height) => {
    if (height) {
      const heightInCentimeters = Number(height.replace("cm", ""))
      const heightInInches = Number(height.replace("in", ""))

      if (height.includes("cm") && (150 <= heightInCentimeters && heightInCentimeters <= 193)) {
        return true
      }
      if (height.includes("in") && (59 <= heightInInches && heightInInches <= 76)) {
        return true
      }
    }
    return false
  }

  const validateHairColor = (hairColor) => {
    return hairColor && hairColor.match(/^#[a-f0-9]{6}$/gm)
  }

  const validateEyeColor = (eyeColor) => {
    return eyeColor && ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(eyeColor)
  }

  const validatePassportId = (passportId) => {
    return passportId && (passportId.length === 9)
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