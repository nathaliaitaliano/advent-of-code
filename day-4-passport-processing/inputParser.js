const parse = (inputData) => {
  let passportsData = {}

  passportsInputData = inputData.split(":")
  passportsData[passportsInputData[0]] = passportsInputData[1]

  return passportsData
}

module.exports = { parse }