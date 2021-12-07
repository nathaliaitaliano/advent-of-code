const assert = require('assert')
const parser = require('../parser')

describe('Parser', function () {
    describe('parseToDecimal', function () {
      it('should return a decimal number given a binary number', function () {
        const binaryNumber = "01001"
        const result = parser.parseToDecimal(binaryNumber)

        assert.deepEqual(result, 9)
      })
    })
})