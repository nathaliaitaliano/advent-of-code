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
  const fixedInstructions = instructions.map(instruction => ({ ...instruction }));
  for (let i = 0; i < executedInstructions.length; i++) {
    const index = executedInstructions[i];
    if (fixedInstructions[index].operation === "jmp") {
      fixedInstructions[index].operation = "nop";
      return fixedInstructions;
    } else if (fixedInstructions[index].operation === "nop") {
      fixedInstructions[index].operation = "jmp";
      return fixedInstructions;
    }
  }
}

const fixLoop = instructions => {
  let debugResult = debug(instructions);
  let executedInstructions = debugResult.executedInstructions;
  let fixedLoop = [];

  while (debugResult.hasInfiniteLoop) {
    const newInstructions = fixInstructions(instructions, executedInstructions); debugResult = debug(newInstructions);
    executedInstructions.splice(0, 1);
    fixedLoop = newInstructions;
  }

  return fixedLoop;
}

module.exports = { calculateAccumulatorValue, isAnInfiniteLoop, debug, fixLoop }