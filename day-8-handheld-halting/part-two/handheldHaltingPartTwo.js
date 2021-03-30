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

const isAnInfiniteLoop = instructions => debug(instructions);

const debug = instructions => {
  let index = 0;
  const indexOfInstructionsExecuted = [];
  let isAnInfiniteLoop = false

  do {
    const instruction = instructions[index];
    indexOfInstructionsExecuted.push(index);
    if (instruction.operation === "jmp") {
      index += instruction.argument;
    } else {
      index += 1;
    }
    isAnInfiniteLoop = indexOfInstructionsExecuted.includes(index);
  } while (index < instructions.length && !isAnInfiniteLoop);

  return {
    hasInfiniteLoop: isAnInfiniteLoop,
    executedInstructions: indexOfInstructionsExecuted
  }
}

module.exports = { calculateAccumulatorValue, isAnInfiniteLoop }