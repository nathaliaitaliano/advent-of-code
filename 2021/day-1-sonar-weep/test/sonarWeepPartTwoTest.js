const assert = require('assert')
const sonarWeepPartTwo = require('../sonarWeepPartTwo')

describe('SonarWeepPartTwo', function () {
    describe('findSumMeasurements', function () {
        it('should return 0 given one measurement', function () {
            const entries = [1]
            const result = sonarWeepPartTwo.findSumMeasurements(entries)

            assert.strictEqual(result, 0)
        })

        it('should return 0 given an entries with two measurements', function () {
          const entries = [1, 2]
          const result = sonarWeepPartTwo.findSumMeasurements(entries)

          assert.strictEqual(result, 0)
      })

      it('should return 0 given an entries with three measurements', function () {
        const entries = [1, 2, 3]
        const result = sonarWeepPartTwo.findSumMeasurements(entries)

        assert.strictEqual(result, 0)
      })

      it('should return 0 given an entries with four measurements where the next three-measurement window sum is lower than previous', function () {
        const entries = [1, 2, 3, 0]
        const result = sonarWeepPartTwo.findSumMeasurements(entries)

        assert.strictEqual(result, 0)
      })

    it('should return 1 given an entries with four measurements where the next three-measurement window sum is lower than previous', function () {
      const entries = [1, 2, 3, 4]
      const result = sonarWeepPartTwo.findSumMeasurements(entries)

      assert.strictEqual(result, 1)
    })

    it('should return 5 given an entries', function () {
      const entries = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
      const result = sonarWeepPartTwo.findSumMeasurements(entries)

      assert.strictEqual(result, 5)
    })
  })
})