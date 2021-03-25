const parse = (instructionsInput) => {
  const instructions = [];

  instructionsInput.forEach(instructionInput => {
    const instruction = instructionInput.split(":");
    const instructionOperation = instruction[0];
    const instructionArgument = Number(instruction[1]);

    instructions.push({ operation: instructionOperation, argument: instructionArgument });

  });
  return instructions;
}

module.exports = { parse };