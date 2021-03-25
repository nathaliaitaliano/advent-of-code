const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;
  let index = 0;
  const indexOfInstructionsExecuted = [];

  do {
    const instruction = instructions[index];
    indexOfInstructionsExecuted.push(index);

    if (instruction.operation === "acc") {
      accumulator += instruction.argument;
      index += 1;
    } else if (instruction.operation === "jmp") {
      index += instruction.argument;
    } else {
      index += 1;
    }
  } while (!indexOfInstructionsExecuted.includes(index) && index < instructions.length);
  return accumulator;
}

module.exports = { calculateAccumulatorValue }