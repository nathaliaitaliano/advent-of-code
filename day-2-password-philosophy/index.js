const fs = require('fs')
const passwordPhilosohy = require('./passwordPhilosophy')

const passwordsDataContent = fs.readFileSync('input-passwords').toString().split('\n')

console.log(passwordsDataContent)