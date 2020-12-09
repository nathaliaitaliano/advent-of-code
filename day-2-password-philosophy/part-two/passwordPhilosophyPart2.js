const analyse = (firstPositionExpected, secondPositionExpected, letter, password) => (password.charAt(firstPositionExpected - 1) === letter) != (password.charAt(secondPositionExpected - 1) === letter)


module.exports = { analyse }