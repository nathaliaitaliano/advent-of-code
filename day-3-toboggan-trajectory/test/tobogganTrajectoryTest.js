const assert = require('assert')
const tobogganTrajectory = require('../tobogganTrajectory')

describe('TobogganTrajectory', function () {
  describe('countTrees', function () {
    it('should return 0 tree', function () {
      const map = [".........", "........."]
      const treesQuantityExpected = 0
      const treesQuantity = tobogganTrajectory.countTrees(map)

      assert.strictEqual(treesQuantityExpected, treesQuantity)
    })

    it('should return 1 tree', function () {
      const map = ["...##.##..", "..###...#."]
      const treesQuantityExpected = 1
      const treesQuantity = tobogganTrajectory.countTrees(map)

      assert.strictEqual(treesQuantityExpected, treesQuantity)
    })

    it('should return 2 trees', function () {
      const map = [".....#####", "..######.", ".....###."]
      const treesQuantityExpected = 2
      const treesQuantity = tobogganTrajectory.countTrees(map)

      assert.strictEqual(treesQuantityExpected, treesQuantity)
    })

    it('should return 3 trees', function () {
      const map = ["##########", "##########", "##########", "###.......", "#######..."]
      const treesQuantityExpected = 3
      const treesQuantity = tobogganTrajectory.countTrees(map)

      assert.strictEqual(treesQuantityExpected, treesQuantity)
    })

    it('should return 4 trees on the map given a coordinate pattern (x=3, y=1', function () {
      const map = ["##########", "######....", ".#.#.#####", "###...####", ".#.######"]
      const treesQuantityExpected = 4
      const xCoordinate = 3
      const yCoordinate = 1
      const treesQuantity = tobogganTrajectory.countTrees(map, xCoordinate, yCoordinate)
    })
  })
})