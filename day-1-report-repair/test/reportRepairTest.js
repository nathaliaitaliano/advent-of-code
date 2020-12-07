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
    
    it('should return NULL given an inexistents numbers that match with the entries sum result 7', function(){
        const entries = [3, 2];
        const sumResultExpected = 7;

        const result = report.find(entries, sumResultExpected);

        assert.strictEqual(result, null);
    });

  });
});