const assert = require('assert');
const encodingError = require('../encodingError');

describe('EncodingError', function () {
  describe('findFirstInvalidNumber', function () {
    it('Should return an invalid number that is not a sum of two numbers from preamble numbers given a preamble numbers quantity of two', function () {
      const encodingErrorInput = [1, 2, 2];
      const preambleNumbersQuantity = 2;

      const invalidNumberExpected = 2;
      const invalidNumer = encodingError.findFirstInvalidNumber(encodingErrorInput, preambleNumbersQuantity);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })

    it('Should return an invalid number that is not a sum of any two numbers from preamble numbers given a preamble numbers quantity of three', function () {
      const encodingErrorInput = [1, 2, 3, 4, 1];
      const preambleNumbersQuantity = 3;

      const invalidNumberExpected = 1;
      const invalidNumer = encodingError.findFirstInvalidNumber(encodingErrorInput, preambleNumbersQuantity);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })

    it('Should return the first number that is not a sum of any two numbers from preamble numbers given a preamble number quantity of three', function () {
      const encodingErrorInput = [1, 2, 3, 4, 20, 2];
      const preambleNumbersQuantity = 3;

      const invalidNumberExpected = 20;
      const invalidNumer = encodingError.findFirstInvalidNumber(encodingErrorInput, preambleNumbersQuantity);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })

    it('Should return the first number that is not a sum of any two numbers from preamble numbers given a preamble number quantity of five', function () {
      const encodingErrorInput = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];
      const preambleNumbersQuantity = 5;

      const invalidNumberExpected = 127;
      const invalidNumer = encodingError.findFirstInvalidNumber(encodingErrorInput, preambleNumbersQuantity);

      assert.strictEqual(invalidNumer, invalidNumberExpected);
    })
  })
})