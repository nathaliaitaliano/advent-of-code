const assert = require('assert')
const report = require('../sonarWeep')

describe('SonarWeep', function () {
    describe('findMeasurements', function () {
        it('should return NULL given an empty array', function () {
            const entries = []

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, null)
        })

        it('should return 0 given one measurement', function () {
            const entries = [1]

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, 0)
        })
    })
})