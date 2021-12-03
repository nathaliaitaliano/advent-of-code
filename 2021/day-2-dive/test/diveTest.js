const assert = require('assert')
const dive = require('../dive')

describe('Dive', function () {
    describe('calculatePositions', function () {
      it('should increases horizontal position given an instruction foward', function () {
          const entries = ["forward 1"]
          const positionsExpected = { horizontal: 1, depth: 0 }

          const result = dive.calculatePositions(entries)

          assert.deepEqual(result, positionsExpected)
      })

      it('should increases depth position given an instruction down', function () {
        const entries = ["forward 1", "down 1"]
        const positionsExpected = { horizontal: 1, depth: 1 }

        const result = dive.calculatePositions(entries)

        assert.deepEqual(result, positionsExpected)
      })

      it('should decreases depth position given an instruction up', function () {
        const entries = ["forward 1", "down 1", "up 2"]
        const positionsExpected = { horizontal: 1, depth: -1 }

        const result = dive.calculatePositions(entries)

        assert.deepEqual(result, positionsExpected)
      })

      it('should return position given an entries with instructions', function () {
        const entries = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
        const positionsExpected = { horizontal: 15, depth: 10 }

        const result = dive.calculatePositions(entries)

        assert.deepEqual(result, positionsExpected)
      })
    })
})