const assert = require('assert').strict
const passportProcessing = require('../passportProcessing')

describe('PassportProcessing', function () {
  describe('validate', function () {
    it('should return FALSE given a password without birth year data', function () {
      const passportData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without issue year data', function () {
      const passportData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FLASE given a passport without expiration year data', function () {
      const passportData = {ecl: "gry", pid: 860033327, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm"}
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without height data', function () {
      const passportData = {ecl: "gry", eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147 }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without hair color data', function () {
      const passportData = {ecl: "gry", pid: 860033327, eyr: 2020, byr: 1937, iyr: 2017, cid: 147, hgt: "183cm"}
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without eye color data', function () {
      const passportData = { pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm"}
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without passport ID', function () {
      const passportData = {ecl: "gry", eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm"}
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a passport that contains the birth year, issue year, expiration year, height, hair color, eye color and passport ID data', function () {
      const passportData = {ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm"}
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(passportValidation)
    })
  })
})