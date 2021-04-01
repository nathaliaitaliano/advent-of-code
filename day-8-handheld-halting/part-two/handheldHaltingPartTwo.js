const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;
  let index = 0;

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

const fixInstructions = (instructions, executedInstructions) => {
  for (let i = 0; i < executedInstructions.length; i++) {
    if (instructions[i].operation === "jmp") {
      instructions[i].operation = "nop";
      return instructions;
    } else if (instructions[i].operation === "nop") {
      instructions[i].operation = "jmp";
      return instructions;
    }
  }
}

const fixLoop = instructions => {
  let debugResult = debug(instructions);
  let newInstructions = instructions;

  while (debugResult.hasInfiniteLoop) {
    const executedInstructions = debugResult.executedInstructions;
    newInstructions = fixInstructions(instructions, executedInstructions);
    debugResult = debug(newInstructions)
  }
  return newInstructions;
}

module.exports = { calculateAccumulatorValue, isAnInfiniteLoop, debug, fixLoop }