const assert = require('assert')
const passportProcessing = require('../passportProcessing')

describe('PassportProcessing', function () {
  describe('validatePassport', function () {
    it('should return FALSE given a password without the birth year', function () {
      const passportData = { pid: 860033327 }
      const passportValidation = passportProcessing.validatePassport(passportData)

      assert.strictEqual(passportValidation, false)
    })
  })
})