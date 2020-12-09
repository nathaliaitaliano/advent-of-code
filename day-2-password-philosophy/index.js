const fs = require('fs')
const passwordPhilosohy = require('./passwordPhilosophy')

const passwordsDataContent = fs.readFileSync('passwords-input').toString().split('\n')

const findData = (passwordsDataContent) => {
  const passwordData = []

  for (let i = 0; i < passwordsDataContent.length; i++) {
    passwordsDataContent[i].split(" ")
    
  }

}
console.log(passwordsDataContent)