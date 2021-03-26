const assert = require('assert');
const inputParser = require('../part-one/inputParser');

describe('InputParser', function () {
  describe('sanitize', function () {
    it('should return an array of objects, that contains an operation and argument as properties, given one instruction input', function () {
      const instructionsInput = ["acc +2"];
      const instructionsExpected = [{ operation: "acc", argument: 2 }];
      const instructions = inputParser.parse(instructionsInput);

      assert.deepStrictEqual(instructions, instructionsExpected);
    })

    it('should return an array of objects, that contains an operation and argument as properties, given an instruction input with multiple lines', function () {
      const instructionsInput = [
        "acc +2",
        "jmp -2",
        "nop +0"
      ];
      const instructionsExpected = [
        { operation: "acc", argument: 2 },
        { operation: "jmp", argument: -2 },
        { operation: "nop", argument: 0 }
      ];
      const instructions = inputParser.parse(instructionsInput);

      assert.deepStrictEqual(instructions, instructionsExpected);
    })
  })
})