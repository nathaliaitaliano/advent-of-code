const assert = require('assert')
const passwordPhilosophy = require('../part-two/passwordPhilosophyPart2')

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

        it('should return TRUE given a password that contains the letter I in a 2nd or 3nd position', function () {
            const letter = "i"
            const password = "kirby"
            const firstPositionExpected = 2
            const secondPositionExpected = 3
            const resultAnalysisExpected = passwordPhilosophy.analyse(firstPositionExpected, secondPositionExpected, letter, password)

            assert.strictEqual(resultAnalysisExpected, true)
        })

        it('should return FALSE given a password that contains the letter M on the 3nd AND 4nd position', function() {
            const letter = "m"
            const password = "hammerwatch"
            const firstPositionExpected = 3
            const secondPositionExpected = 4
            const resultAnalysisExpected = passwordPhilosophy.analyse(firstPositionExpected, secondPositionExpected, letter, password)

            assert.strictEqual(resultAnalysisExpected, false)
        })
    })
})