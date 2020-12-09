const letterQuantityExpected = (letterMinQuantityExpected, letterMaxQuantityExpected) => {
    let letterQuantity = []

    for (let k = letterMinQuantityExpected; k <= letterMaxQuantityExpected; k++) {
        letterQuantity.push(k)
    }
    return letterQuantity

}

const analyse = (password, letter, letterQuantityExpected) => {
    const lettersPassword = password.split("")
    let letterQuantity = 0
    let passwordValidation = false

    for (let i = 0; i < lettersPassword.length; i++) {
        if (lettersPassword[i] === letter) {
            letterQuantity += 1
        }
    }

    for (let j = 0; j < letterQuantityExpected.length; j++) {
        if (letterQuantityExpected[j] === letterQuantity) {
            passwordValidation = true
        }
    }
    return passwordValidation
}

module.exports = { analyse, letterQuantityExpected };