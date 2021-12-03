const assert = require('assert')
const dive = require('../dive')

describe('Dive', function () {
    describe('multiplyPositions', function () {
        it('should return 0 for positions given an entries without instructions', function () {
            const entries = []
            const positionsExpected = { horizontal: 0, depth: 0 }

            const result = dive.calculatePositions(entries)

            assert.deepEqual(result, positionsExpected)
        })
    })
})