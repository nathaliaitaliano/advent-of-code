const validate = (airplaneInput) => {

  if (airplaneInput.length === 128) {
    for (let i = 0; i < airplaneInput.length; i++) {
      if (airplaneInput[i].length === 8) {
        return true
      }
      return false
    }
  }

}

module.exports = { validate }