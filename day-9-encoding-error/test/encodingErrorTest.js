const assert = require('assert');
const encodingError = require('../encodingError');

describe('EncodingError', function () {
  describe('invalidateNumber', function () {
    it('Should return a number from othersNumbers that is not a sum of two numbers from preambleNumbers given a preambleNumbers with two numbers', function () {
      const encodingErrorInput = {
        preambleNumbers: [1, 2],
        otherNumbers: [4]
      };
      const invalidNumberExpected = 4;
      const invalidNumer = encodingError.invalidateNumber(encodingErrorInput);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })

    it('Should return a number from othersNumbers that is not a sum of any two numbers from preambleNumbers given a preambleNumbers with three numbers', function () {
      const encodingErrorInput = {
        preambleNumbers: [1, 2, 3],
        otherNumbers: [4, 6]
      };
      const invalidNumberExpected = 6;
      const invalidNumer = encodingError.invalidateNumber(encodingErrorInput);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })
  })
})