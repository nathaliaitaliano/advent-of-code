const fs = require('fs');
const reportRepair = require('./reportRepair');

const inputContent = fs.readFileSync('entries-input').toString().split('\n');

const entries = inputContent.map(Number);

console.log(reportRepair.multiply(reportRepair.find(entries, 2020)));