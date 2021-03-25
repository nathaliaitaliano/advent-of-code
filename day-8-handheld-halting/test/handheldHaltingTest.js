const assert = require('assert')
const handheldHalting = require('../handheldHalting')

describe('HandheldHalting', function () {
  describe('calculateAccumulatorValue', function () {
    it('should return value 0 for the accumulator(ACC) before starts run the instructions', function () {
      const instructions = [{}];
      const accumulatorExpected = 0;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should sum +2 to accumulator value given an instruction with operation: "acc" and argument: 2', function () {
      const instructions = [{ operation: "acc", argument: 2 }];
      const accumulatorExpected = 2;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should sum -1 to accumulator value given an instruction with operation: "acc" and argument: 2', function () {
      const instructions = [{ operation: "acc", argument: -1 }];
      const accumulatorExpected = -1;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should sum accumulator value given more than one instruction with operation: "acc" and argument: 2', function () {
      const instructions = [
        { operation: "acc", argument: 5 },
        { operation: "acc", argument: -2 }
      ];
      const accumulatorExpected = 3;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should pass to the next instruction given an instruction with operation: "nop"', function () {
      const instructions = [
        { operation: "acc", argument: 5 },
        { operation: "acc", argument: -2 },
        { operation: "nop", argument: 0 }
      ];
      const accumulatorExpected = 3;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should jump for the next instructions given an instruction with operation: "jmp" with a positive value for argument', function () {
      const instructions = [
        { operation: "acc", argument: 5 },
        { operation: "jmp", argument: 2 },
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 }
      ];
      const accumulatorExpected = 6;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should jump for the previous instruction given an instruction with operation: "jmp" with a negative value for argument', function () {
      const instructions = [
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: 2 },
        { operation: "jmp", argument: 2 },
        { operation: "jmp", argument: -1 },
        { operation: "acc", argument: 1 },
      ];
      const accumulatorExpected = 2;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should return the final valuer for accumulator before starts the first repeated instruction', function () {
      const instructions = [
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: 2 },
        { operation: "acc", argument: 2 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: -2 }
      ];
      const accumulatorExpected = 4;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })
  })
})