const assert = require('assert').strict
const passportProcessing = require('../passportProcessing')

describe('PassportProcessing', function () {
  describe('validatePassport', function () {
    it('should return FALSE given a password without the birth year', function () {
      const passportData = { pid: 860033327, eyr: 2022 }
      const passportValidation = passportProcessing.validatePassport(passportData)

      assert.ok(!passportValidation)
    })

    it('should return TRUE given a passport that contains the birth year', function () {
      const passportData = { byr: 1989, pid: 118755096 }
      const passportValidation = passportProcessing.validatePassport(passportData)

      assert.ok(passportValidation)
    })
  })
})