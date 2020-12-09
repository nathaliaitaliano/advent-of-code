const assert = require('assert')
const tobogganTrajectory = require('../tobogganTrajectory')

describe('TobogganTrajectory', function () {
  describe('countTrees', function () {
    it('should return 1 tree', function () {
      const map = ["...##.", "..###"]
      const treesExpected = 1
      const treesQuantity = tobogganTrajectory.countTrees(map)
      
      assert.strictEqual(treesExpected, treesQuantity)
    })
  })
})