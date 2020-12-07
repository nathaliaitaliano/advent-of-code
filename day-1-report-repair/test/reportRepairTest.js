const assert = require('assert');
const report = require('../reportRepair');

describe('ReportRepair', function() {
  describe('find', function() {
    it('should return NULL given an empty array', function() {
        const entries = [];
        const sumResultExpected = 0;

        const result = report.find(entries, sumResultExpected);

        assert.strictEqual(result, null);
    });

    it('should return the two numbers that sum results in 5', function() {
        const entries = [4, 1];
        const sumResultExpected = 5;
        
        const result = report.find(entries, sumResultExpected);

        assert.deepStrictEqual(result, [4, 1]);
    });
    
    it('should return NULL given an inexistents numbers that match with the entries sum result 7', function() {
        const entries = [3, 2];
        const sumResultExpected = 7;

        const result = report.find(entries, sumResultExpected);

        assert.strictEqual(result, null);
    });

    it('should return the two numbers, from a multiple entries, given a sum result 6', function() {
        const entries = [3, 2, 4];
        const sumResultExpected = 6;

        const result = report.find(entries, sumResultExpected);

        assert.deepStrictEqual(result, [2, 4]);
    });

    it('should return the two numbers, from a multiple entries, given a sum result 2020', function() {
        const entries = [1721, 979, 366, 299, 675, 1456];
        const sumResultExpected = 2020;

        const result = report.find(entries, sumResultExpected);

        assert.deepStrictEqual(result, [1721, 299]);
    });

    it('should return multiplication result 514579 from the two numbers found given a sum result 2020', function() {
        const entries = [1721, 979, 366, 299, 675, 1456];
        const sumResultExpected = 2020;

        const result = report.multiply(report.find(entries, sumResultExpected));

        assert.deepStrictEqual(result, 514579);
    });
    
  });
});