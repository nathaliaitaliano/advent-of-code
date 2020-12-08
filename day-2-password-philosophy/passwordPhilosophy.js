const analyse = (password, letter, letterQuantityExpected) => {
    const lettersPassword = password.split("")
    let letterQuantity = 0

    for (let i = 0; i < lettersPassword.length; i++) {
        if (lettersPassword[i] === letter) {
            letterQuantity += 1
        }
    }

    return letterQuantity === letterQuantityExpected
}

module.exports = { analyse };