const assert = require('assert')
const sonarWeep = require('../sonarWeep')

describe('SonarWeep', function () {
    describe('findMeasurements', function () {
        it('should return 0 given one measurement', function () {
            const entries = [1]

            const result = sonarWeep.findMeasurements(entries)

            assert.strictEqual(result, 0)
        })

        it('should return 0 given an entries with two measurements where the next value is lower than previous', function () {
            const entries = [1, 0]

            const result = sonarWeep.findMeasurements(entries)

            assert.strictEqual(result, 0)
        })

        it('should return 1 given an entries with two measurements where the next value is greater than previous', function () {
            const entries = [1, 2]

            const result = sonarWeep.findMeasurements(entries)

            assert.strictEqual(result, 1)
        })

        it('should return 1 given an entries', function () {
            const entries = [1, 1, 2]

            const result = sonarWeep.findMeasurements(entries)

            assert.strictEqual(result, 1)
        })

        it('should return 3 given an entries', function () {
            const entries = [1, 2, 3, 4, 2, 1]

            const result = sonarWeep.findMeasurements(entries)

            assert.strictEqual(result, 3)
        })
    })
})