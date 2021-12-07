const generateDiagnostic = entries => {
  const diagnostic = {
    gammaRate: "",
    epilsonRate: ""
  }

  const numbersByColumnGrouped = traverse(entries)

  numbersByColumnGrouped.forEach(number => {
    const zeros = number.filter(bit => bit === "0").length
    if(zeros > number.length/2) {
      diagnostic.gammaRate += "0"
      diagnostic.epilsonRate += "1"
    } else {
      diagnostic.gammaRate += "1"
      diagnostic.epilsonRate += "0"
    }
  })
  console.log(diagnostic)
  return diagnostic
}

const traverse = entries => entries.reduce((result, report) => {
  report.split("").forEach((bit, index) => result[index].push(bit))
     return result
  }, Array.from({length: entries[0].length}, () => []))

module.exports = { generateDiagnostic }