const parse = (instructionsInput) => instructionsInput.map(instructions => {
    const instruction = instructions.split(" ");
    const operationValue = instruction[0];
    const argumentValue = Number(instruction[1]);

    return { operation: operationValue, argument: argumentValue };
  })

module.exports = { parse };