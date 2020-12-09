const analyse = (firstPositionExpected, secondPositionExpected, letter, password) => {
    return ((password.charAt(firstPositionExpected - 1) === letter) || (password.charAt(secondPositionExpected - 1) === letter)) && (password.charAt(firstPositionExpected - 1) != (password.charAt(secondPositionExpected - 1)))
}

module.exports = { analyse }