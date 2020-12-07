const assert = require('assert');
const report = require('../reportRepair');

describe('ReportRepair', function() {
  describe('find', function() {
    it('should return NULL given an empty array', function() {
        const entries = [];

        const result = report.find(entries);

        assert.strictEqual(result, null);
    });
  });
});