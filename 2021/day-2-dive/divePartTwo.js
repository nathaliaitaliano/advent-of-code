const calculatePositions = (entries) => {
var instructions = getInstructions(entries)

const positions = {
  horizontal: 0,
  depth: 0,
  aim : 0
}

  instructions.forEach(instruction => {
    if(instruction.command == "forward") {
      positions.horizontal += instruction.value
      positions.depth += positions.aim * instruction.value
    }
    if(instruction.command == "down") positions.aim += instruction.value
    if(instruction.command == "up") positions.aim -= instruction.value
  })

  return positions
}

const getInstructions = (entries) => entries.map(entrie => {
    const values = entrie.split(" ");
    return {command: values[0], value: parseInt(values[1])}
})

module.exports = { calculatePositions }