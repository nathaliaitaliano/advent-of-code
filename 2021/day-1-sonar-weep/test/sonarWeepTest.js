const assert = require('assert')
const report = require('../sonarWeep')

describe('SonarWeep', function () {
    describe('findMeasurements', function () {
        it('should return NULL given a null entries', function () {
            const entries = null

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, null)
        })

        it('should return NULL given an empty entries', function () {
            const entries = []

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, null)
        })

        it('should return 0 given one measurement', function () {
            const entries = [1]

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, 0)
        })

        it('should return 0 given an entries with two measurements where the next value is lower than previous', function () {
            const entries = [1, 0]

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, 0)
        })

        it('should return 1 given an entries with two measurements where the next value is greater than previous', function () {
            const entries = [1, 2]

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, 1)
        })

        it('should return 1 given an entries', function () {
            const entries = [1, 1, 2]

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, 1)
        })

        it('should return 3 given an entries', function () {
            const entries = [1, 2, 3, 4, 2, 1]

            const result = report.findMeasurements(entries)

            assert.strictEqual(result, 3)
        })
    })
})