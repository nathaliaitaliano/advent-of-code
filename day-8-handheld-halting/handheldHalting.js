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

module.exports = { calculateAccumulatorValue }