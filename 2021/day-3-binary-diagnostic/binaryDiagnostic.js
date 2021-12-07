const generateDiagnostic = entries => {
  const diagnostic = {
    gammaRate: "",
    epilsonRate: ""
  }

  traverse(entries).forEach(number => number.filter(bit => bit === "0").length > number.length/2 ? (diagnostic.gammaRate += "0", diagnostic.epilsonRate += "1") : (diagnostic.gammaRate += "1", diagnostic.epilsonRate += "0"))

  return diagnostic
}

const traverse = entries => entries.reduce((result, report) => {
  report.split("").forEach((bit, index) => result[index].push(bit))
     return result
  }, Array.from({length: entries[0].length}, () => []))

module.exports = { generateDiagnostic }