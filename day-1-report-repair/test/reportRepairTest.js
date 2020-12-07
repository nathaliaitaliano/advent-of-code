const assert = require('assert');
const report = require('../reportRepair');

describe('ReportRepair', function() {
  describe('find', function() {
    it('should return NULL given an empty array', function() {
        const entries = [];

        const result = report.find(entries);

        assert.strictEqual(result, null);
    });

    it('should return the two numbers that sum results in 5', function() {
        const entries = [4, 1];
        
        const result = report.find(entries);

        assert.deepStrictEqual(result, [4, 1]);
    });
  });
});