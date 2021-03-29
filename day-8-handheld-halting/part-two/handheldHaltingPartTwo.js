const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;
  let index = 0;
  const indexOfInstructionsExecuted = [];

  do {
    const instruction = instructions[index];

    if (instruction.operation === "acc") {
      accumulator += instruction.argument;
      index += 1;
    } else if (instruction.operation === "jmp") {
      index += instruction.argument;
    } else {
      index += 1;
    }
  } while (index < instructions.length);
  return accumulator;
}

const isAnInfiniteLoop = (instructions) => {
  let index = 0;
  const indexOfInstructionsExecuted = [];
  const infiniteLoop = true;

  do {
    const instruction = instructions[index];

    if (indexOfInstructionsExecuted.includes(index)) {
      return infiniteLoop;
    } else {
      indexOfInstructionsExecuted.push(index);
      if (instruction.operation === "jmp") {
        index += instruction.argument;
      } else {
        index += 1;
      }
    }
  } while (index < instructions.length);
  calculateAccumulatorValue(instructions);
}

module.exports = { calculateAccumulatorValue, isAnInfiniteLoop }