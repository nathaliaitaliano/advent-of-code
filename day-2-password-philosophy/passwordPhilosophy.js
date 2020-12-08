const analyse = (password, letter) => {
    return password.includes(letter);
}

module.exports = { analyse };