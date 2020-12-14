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
  })
})