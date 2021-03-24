const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (instruction.operation === "acc") accumulator += instruction.argument;
    if (instruction.operation === "jmp") i += instruction.argument - 1;
  }
  return accumulator;
}

module.exports = { calculateAccumulatorValue }