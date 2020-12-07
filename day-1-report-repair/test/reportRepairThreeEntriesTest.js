const assert = require('assert');
const report = require('../reportRepairThreeEntries');

describe('ReportRepairThreeEntries', function () {
    describe('findThreeEntries', function () {
        it('should return the three numbers, from a multiple entries, given a sum result 2020', function () {
            const entries = [1721, 979, 366, 299, 675, 1456];
            const sumResultExpected = 2020;

            const result = report.findThreeEntries(entries, sumResultExpected);

            assert.deepStrictEqual(result, [979, 366, 675]);
        });

        it('should return multiplication result 241861950 from the three numbers found given a sum result 2020', function () {
            const entries = [1721, 979, 366, 299, 675, 1456];
            const sumResultExpected = 2020;

            const result = report.multiplyThreeEntries(report.findThreeEntries(entries, sumResultExpected));

            assert.strictEqual(result, 241861950);
        });
    });
});