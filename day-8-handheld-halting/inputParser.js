const parse = (instructionsInput) => {
  const input = instructionsInput.split(":");
  const instructionOperation = input[0];
  const instructionArgument = Number(input[1]);

  const instructions = [{ operation: instructionOperation, argument: instructionArgument }];
  return instructions;
}

module.exports = { parse };