const assert = require('assert')
const passwordPhilosophy = require('../passwordPhilosophyPart2')

describe('PasswordPhilosophy', function () {
    describe('findLetter', function () {
        it('should return FALSE given a password without the letter H', function () {
            const letter = "a"
            const password = "control"
            const firstPositionExpected = 1
            const secondPositionExpected = 2
            const resultAnalysisExpected = passwordPhilosophy.analyse(firstPositionExpected, secondPositionExpected, letter, password)
            assert.strictEqual(resultAnalysisExpected, false)
        })

    })
})