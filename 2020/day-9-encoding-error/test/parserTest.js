const assert = require('assert');
const parser = require('../parser');

describe('Parser', function () {
  describe('parse', function () {
    it('Should return a list of elements type number given an input', function () {
      const input = ["1", "2", "3"];
      const encodingErrorExpected = [1, 2, 3];
      const encodingError = parser.parse(input);

      assert.deepStrictEqual(encodingError, encodingErrorExpected);
    })
  })
})