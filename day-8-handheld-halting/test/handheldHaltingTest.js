const assert = require('assert')
const handheldHalting = require('../handheldHalting')

describe('HandheldHalting', function () {
  describe('calculateAccumulatorValue', function () {
    it('should return value 0 for the accumulator(ACC) before starts run the instructions', function () {
      const instructions = { acc: ["+", 2], jmp: ["-", 3], nop: ["+", 0] };
      const accumulatorExpected = 0;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })
  })
})