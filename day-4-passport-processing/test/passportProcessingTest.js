const assert = require('assert').strict
const passportProcessing = require('../passportProcessing')

describe('PassportProcessing', function () {
  describe('validate', function () {
    it('should return FALSE given a password without the birth year', function () {
      const passportData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without issue year', function () {
      const passportData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", byr: 1937, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FLASE given a passport without issue year', function () {
      const passportData = { ecl: "gry", pid: 860033327, eyr: 2020, hcl: "#fffffd", iyr: 2017, cid: 147, hgt: "183cm" }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)
    })

    it('should return FALSE given a passport without passport ID', function () {
      const passportData = {ecl: "gry", eyr: 2020, hcl: "#fffffd", byr: 1937, iyr: 2017, cid: 147, hgt: "183cm"}      
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(!passportValidation)

    })

    xit('should return TRUE given a passport that contains the birth year,', function () {
      const passportData = { byr: 1989, pid: 118755096 }
      const passportValidation = passportProcessing.validate(passportData)

      assert.ok(passportValidation)
    })
  })
})