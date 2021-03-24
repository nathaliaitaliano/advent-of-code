const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;

  instructions.forEach(instruction => {
    if (instruction.operation = "acc") accumulator += instruction.argument;
  })
  return accumulator;
}

module.exports = { calculateAccumulatorValue }