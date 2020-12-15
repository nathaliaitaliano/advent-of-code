const findSeat = () => {

}

const airplaneValidate = (airplane) => {

  if (airplane.length === 128) {
    for (let i = 0; i < airplane.length; i++) {
      if (airplane[i].length === 8) {
        return true
      }
      return false
    }
  }

}

module.exports = { findSeat, airplaneValidate }