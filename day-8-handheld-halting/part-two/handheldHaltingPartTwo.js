const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;
  let index = 0;

  if (isAnInfiniteLoop(instructions)) {
    return fixInfiniteLoop(instructions);
  } else {
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
}

const isAnInfiniteLoop = (instructions) => {
  let index = 0;
  const indexOfInstructionsExecuted = [];

  do {
    const instruction = instructions[index];
    const isAnInfiniteLoop = indexOfInstructionsExecuted.includes(index);

    if (!isAnInfiniteLoop) {
      indexOfInstructionsExecuted.push(index);
      if (instruction.operation === "jmp") {
        index += instruction.argument;
      } else {
        index += 1;
      }
    } else {
      return isAnInfiniteLoop;
    }
  } while (index < instructions.length);
  return !isAnInfiniteLoop;
}

module.exports = { calculateAccumulatorValue, isAnInfiniteLoop }