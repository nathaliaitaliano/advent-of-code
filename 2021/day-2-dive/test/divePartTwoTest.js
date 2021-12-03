const assert = require('assert')
const dive = require('../divePartTwo')

describe('Dive', function () {
    describe('calculatePositions', function () {
      it('should increases horizontal position given a forward instruction', function () {
          const entries = ["forward 1"]
          const positionsExpected = { horizontal: 1, depth: 0, aim: 0 }

          const result = dive.calculatePositions(entries)

          assert.deepEqual(result, positionsExpected)
      })

      it('should increases aim given a down instruction', function () {
        const entries = ["forward 1", "down 1"]
        const positionsExpected = { horizontal: 1, depth: 0, aim: 1 }

        const result = dive.calculatePositions(entries)

        assert.deepEqual(result, positionsExpected)
      })
    })
})