const assert = require('assert').strict
const passportProcessing = require('../passportProcessing')

describe('PassportProcessing', function () {
  describe('validate', function () {
    it('should return FALSE given a password without birth year data', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without issue year data', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FLASE given a passport without expiration year data', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, hcl: "#fffffd", byr: 1937, iyr: 2017, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without height data', function () {
      const passportFieldsData = { ecl: "gry", eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147 }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without hair color data', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, byr: 1937, iyr: 2017, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without eye color data', function () {
      const passportFieldsData = { pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without passport ID', function () {
      const passportFieldsData = { ecl: "gry", eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a passport that contains the birth year, issue year, expiration year, height, hair color, eye color and passport ID data', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return TRUE given a passport that contains country ID data besides all the others data informations', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a birth year without four numbers', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 37, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a birth year with four numbers', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a birth year that is not at least 1920', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1900, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a birth year that is not at most 2002', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 2006, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a birth year value that is at least 1920 and at most 2002', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1989, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a issue year without four numbers', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 20, hcl: "#fffffd", byr: 1937, iyr: 17, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a issue year with four numbers', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a issue year that is not at least 2010', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2022, hcl: "#fffffd", byr: 1970, iyr: 1954, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a issue year that is not at most 2020', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2022, hcl: "#fffffd", byr: 1970, iyr: 2055, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a issue year value that is at least 2010 and at most 2020', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1989, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a expiration year without four numbers', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 20, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a expiration year with four numbers', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a expiration year that is not at least 2020', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2019, hcl: "#fffffd", byr: 1900, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a expiration year that is not at most 2030', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2077, hcl: "#fffffd", byr: 1900, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a expiration year value that is at least 2020 and at most 2030', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2025, hcl: "#fffffd", byr: 1989, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a passport with the height value without the metrics cm or in', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2025, hcl: "#fffffd", byr: 1989, iyr: 2017, cid: 147, hgt: "183"}
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a height value with metrics (cm or in)', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2025, hcl: "#fffffd", byr: 1989, iyr: 2017, cid: 147, hgt: "183cm"}
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a height value that is not at least 150cm', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033327, eyr: 2025, hcl: "#fffffd", byr: 1989, iyr: 2017, cid: 147, hgt: "120cm"}
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a eye color value black', function () {
      const passportFieldsData = { ecl: "black", pid: 860033345, eyr: 2023, hcl: "#fffffd", byr: 1990, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a eye color value oth', function () {
      const passportFieldsData = { ecl: "oth", pid: 860033345, eyr: 2023, hcl: "#fffffd", byr: 1990, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return FALSE given a passport ID number that not contains nine digits', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033, eyr: 2023, hcl: "#fffffd", byr: 1990, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a passport ID number that contains nine digits', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033678, eyr: 2023, hcl: "#fffffd", byr: 1990, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return TRUE given a passport with country ID number', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033678, eyr: 2023, hcl: "#fffffd", byr: 1990, iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })

    it('should return TRUE given a passport without country ID number', function () {
      const passportFieldsData = { ecl: "gry", pid: 860033678, eyr: 2023, hcl: "#fffffd", byr: 1990, iyr: 2017, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportFieldsData)

      assert.ok(passportValidation)
    })
  })
})