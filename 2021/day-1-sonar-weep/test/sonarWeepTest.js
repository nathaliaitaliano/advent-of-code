const assert = require('assert')
const report = require('../sonarWeep')

describe('SonarWeep', function () {
    describe('findMeasurements', function () {
        it('should return NULL given an empty array', function () {
            const entries = []

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, null)
        })
    })
})