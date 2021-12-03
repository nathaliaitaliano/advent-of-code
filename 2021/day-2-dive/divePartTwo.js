const calculatePositions = entries => getInstructions(entries).reduce((positions, instruction) => {
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
  return positions
}, {
  horizontal: 0,
  depth: 0,
  aim: 0
})

const getInstructions = (entries) => entries.map(entrie => {
  const values = entrie.split(" ");
  return { command: values[0], value: parseInt(values[1]) }
})

module.exports = { calculatePositions }