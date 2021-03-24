const calculateAccumulatorValue = (instructions) => {
  let accumulator = 0;

  if (instructions[0].operation = "acc") accumulator += instructions[0].argument;
    return accumulator;
}

module.exports = { calculateAccumulatorValue }