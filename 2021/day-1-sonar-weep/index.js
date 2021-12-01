const fs = require('fs');
const reportRepair = require('./sonarWeep');

const inputContent = fs.readFileSync('entries-input').toString().split('\n');