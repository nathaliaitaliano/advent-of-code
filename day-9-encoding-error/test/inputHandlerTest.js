const assert = require('assert');
const inputHandler = require('../inputHandler');

describe('InputHandler', function () {
  describe('parser', function () {
    it('Should return a list of elements type number given an input', function () {
      const input = ["1", "2", "3"];
      const encodingErrorExpected = [1, 2, 3];
      const encodingError = inputHandler.parser(input);

      assert.deepStrictEqual(encodingError, encodingErrorExpected);
    })
  })
})

describe('InputHandler', function () {
  describe('split', function () {
    it('Should return an object with two lists: one for preamble numbers and other for the rest of numbers given an input', function () {
      const input = ["1", "2", "3"];
      const preambleNumbersQuantity = 2;
      const encodingErrorSplitedExpected = {
        preambleNumbers: [1, 2],
        otherNumbers: [3]
      };
      const encodingErrorSplited = inputHandler.split(input, preambleNumbersQuantity);

      assert.deepStrictEqual(encodingErrorSplited, encodingErrorSplitedExpected);
    })
  })
})