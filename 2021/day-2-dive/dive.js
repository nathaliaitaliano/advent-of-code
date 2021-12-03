const calculatePositions = (entries) => {
var instructions = getInstructions(entries)

const positions = {
  horizontal: 0,
  depth: 0
}

  instructions.forEach(instruction => {
    if(instruction.command == "forward") positions.horizontal += instruction.value
    if(instruction.command == "down") positions.depth += instruction.value
    if(instruction.command == "up") positions.depth -= instruction.value
  })

  return positions
}

const getInstructions = (entries) => entries.map(entrie => {
    const values = entrie.split(" ");
    return {command: values[0], value: parseInt(values[1])}
})

module.exports = { calculatePositions }