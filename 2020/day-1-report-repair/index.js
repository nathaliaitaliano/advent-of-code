const fs = require('fs');
const reportRepair = require('./reportRepair');

const inputContent = fs.readFileSync('entries-input').toString().split('\n');

const entries = inputContent.map(Number);

console.log(reportRepair.multiplyEntries(reportRepair.findTwoEntries(entries, 2020)));
console.log(reportRepair.multiplyEntries(reportRepair.findThreeEntries(entries, 2020)));