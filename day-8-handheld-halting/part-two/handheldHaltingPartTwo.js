const calculateAccumulatorValue = instructions => {
  const fixedInstructions = fixLoop(instructions);
  let accumulator = 0;
  let index = 0;
  console.log(fixedInstructions);
  do {
    if (fixedInstructions[index].operation === "acc") {
      accumulator += fixedInstructions[index].argument;
      index += 1;
    } else if (fixedInstructions[index].operation === "jmp") {
      index += fixedInstructions[index].argument;
    } else {
      index += 1;
    }
  } while (index < fixedInstructions.length);
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

  if (!debugResult.hasInfiniteLoop) {
    return instructions;
  } else {
    while (debugResult.hasInfiniteLoop) {
      const newInstructions = fixInstructions(instructions, executedInstructions); debugResult = debug(newInstructions);
      executedInstructions.splice(0, 1);
      fixedLoop = newInstructions;
    }
  }
  return fixedLoop;
}

module.exports = { calculateAccumulatorValue, isAnInfiniteLoop, debug, fixLoop }