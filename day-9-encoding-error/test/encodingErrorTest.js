const assert = require('assert');
const encodingError = require('../encodingError');

describe('EncodingError', function () {
  describe('invalidateNumber', function () {
    it.only('Should return a number from othersNumbers that is not a sum of two numbers from preambleNumbers', function () {
      const encodingErrorInput = {
        preambleNumbers: [1, 2],
        otherNumbers: [4]
      };
      const invalidNumberExpected = 4;
      const invalidNumer = encodingError.invalidateNumber(encodingErrorInput);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })
  })
})