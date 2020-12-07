const fs = require('fs');
const reportRepairPart1 = require('./reportRepairTwoEntries');
const reportRepairPart2 = require('./reportRepairThreeEntries');

const inputContent = fs.readFileSync('entries-input').toString().split('\n');

const entries = inputContent.map(Number);

console.log(reportRepairPart1.multiplyTwoEntries(reportRepairPart1.findTwoEntries(entries, 2020)));
console.log(reportRepairPart2.multiplyThreeEntries(reportRepairPart2.findThreeEntries(entries, 2020)));