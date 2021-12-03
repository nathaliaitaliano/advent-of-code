const calculatePositions = (entries) => {
var instructions = getInstructions(entries)

const positions = {
  horizontal: 0,
  depth: 0,
  aim : 0
}

  instructions.forEach(instruction => {
    switch (instruction.command) {
      case "forward":
        positions.horizontal += instruction.value
        positions.depth += positions.aim * instruction.value
        break

      case "down":
        positions.aim += instruction.value
        break

      case "up":
        positions.aim -= instruction.value
        break
    }
  })
  return positions
}

const getInstructions = (entries) => entries.map(entrie => {
    const values = entrie.split(" ");
    return {command: values[0], value: parseInt(values[1])}
})

module.exports = { calculatePositions }