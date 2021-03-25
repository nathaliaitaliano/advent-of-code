const assert = require('assert');
const inputParser = require('../inputParser');

describe('InputParser', function () {
  describe('sanitize', function () {
    it.only('should return an array of objects, that contains an operation and argument as properties, given one instruction input', function () {
      const instructionsInput = "acc: 2";
      const instructionsExpected = [{ operation: "acc", argument: 2 }];
      const instructions = inputParser.parse(instructionsInput);

      assert.deepStrictEqual(instructions, instructionsExpected);
    })
  })
})