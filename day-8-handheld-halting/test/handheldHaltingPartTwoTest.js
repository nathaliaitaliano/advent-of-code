const assert = require('assert');
const handheldHalting = require('../part-two/handheldHaltingPartTwo');

describe('HandheldHalting', function () {
  describe('calculateAccumulatorValue', function () {
    it('should sum 2 to accumulator value given an instruction with operation: "acc" and argument: 2', function () {
      const instructions = [{ operation: "acc", argument: 2 }];
      const accumulatorExpected = 2;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should sum -1 to accumulator value given an instruction with operation: "acc" and argument: -1', function () {
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
        { operation: "acc", argument: 1 }
      ];
      const accumulatorExpected = 2;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })

    it('should return the accumulator value after the last instruction line given an instruction that starts an infinite loop', function () {
      const instructions = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: 4 },
        { operation: "acc", argument: 3 },
        { operation: "jmp", argument: -3 },
        { operation: "acc", argument: -99 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: -4 },
        { operation: "acc", argument: 6 }
      ];
      const accumulatorExpected = 8;
      const accumulator = handheldHalting.calculateAccumulatorValue(instructions);

      assert.strictEqual(accumulator, accumulatorExpected);
    })
  })

  describe('isAnInfiniteLoop', function () {
    it('should return true for infinite loop given an input of instructions', function () {
      const instructions = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: -2 },
      ];
      const isAnInfiniteLoop = handheldHalting.isAnInfiniteLoop(instructions);

      assert.ok(isAnInfiniteLoop.hasInfiniteLoop);
    })

    it('should return false for infinit loop given an input of instructions', function () {
      const instructions = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "nop", argument: -2 }
      ];
      const debugResult = handheldHalting.debug(instructions);

      assert.strictEqual(debugResult.hasInfiniteLoop, false);
    })
  })

  describe('fixInstructions', function () {
    it('should return the new instructions fixed given an instructions input that has an infinite loop and can be solved changing "jmp" for "nop"', function () {
      const instructions = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: -2 }
      ];
      const instructionsFixedExpected = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "nop", argument: -2 }
      ];
      const instructionsFixed = handheldHalting.fixLoop(instructions);

      assert.deepStrictEqual(instructionsFixed, instructionsFixedExpected);
    })

    it('should return the new instructions fixed given an instructions input that has an infinite loop and can be solved changing "nop" for "jmp"', function () {
      const instructions = [
        { operation: "nop", argument: 3 },
        { operation: "jmp", argument: -1 },
        { operation: "jmp", argument: -2 },
        { operation: "acc", argument: 6 }
      ];
      const instructionsFixedExpected = [
        { operation: "jmp", argument: 3 },
        { operation: "jmp", argument: -1 },
        { operation: "jmp", argument: -2 },
        { operation: "acc", argument: 6 }
      ];
      const instructionsFixed = handheldHalting.fixLoop(instructions);

      assert.deepStrictEqual(instructionsFixed, instructionsFixedExpected);
    })

    it('should return the new instructions fixed given an instructions input that has an infinite loop', function () {
      const instructions = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: 4 },
        { operation: "acc", argument: 3 },
        { operation: "jmp", argument: -3 },
        { operation: "acc", argument: -99 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: -4 },
        { operation: "acc", argument: 6 }
      ];
      const instructionsFixedExpected = [
        { operation: "nop", argument: 0 },
        { operation: "acc", argument: 1 },
        { operation: "jmp", argument: 4 },
        { operation: "acc", argument: 3 },
        { operation: "jmp", argument: -3 },
        { operation: "acc", argument: -99 },
        { operation: "acc", argument: 1 },
        { operation: "nop", argument: -4 },
        { operation: "acc", argument: 6 }
      ];
      const instructionsFixed = handheldHalting.fixLoop(instructions);

      assert.deepStrictEqual(instructionsFixed, instructionsFixedExpected);
    })
  })
})