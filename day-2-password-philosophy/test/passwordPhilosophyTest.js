const assert = require('assert')
const passwordPhilosophy = require('../passwordPhilosophy')

describe('PasswprdPhilosophy', function () {
    describe('findLetter', function () {
        it('should return FALSE given a password without the letter A', function () {
            const letter = "a"
            const password = "dog"
            const letterMinQuantityExpected = 1
            const letterMaxQuantityExpected = 2
            const letterQuantityExpected = passwordPhilosophy.letterQuantityExpected(letterMinQuantityExpected, letterMaxQuantityExpected)
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter, letterQuantityExpected)
            assert.strictEqual(resultAnalysisExpected, false)
        })

        it('should return TRUE given a password that contains 1-3 letters O', function () {
            const letter = "o"
            const password = "good"
            const letterMinQuantityExpected = 1
            const letterMaxQuantityExpected = 3
            const letterQuantityExpected = passwordPhilosophy.letterQuantityExpected(letterMinQuantityExpected, letterMaxQuantityExpected)
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter, letterQuantityExpected)

            assert.strictEqual(resultAnalysisExpected, true)
        })

        it('should return FALSE given a password that not contains 2-5 letters I', function () {
            const letter = "i"
            const password = "with"
            const letterMinQuantityExpected = 2
            const letterMaxQuantityExpected = 5
            const letterQuantityExpected = passwordPhilosophy.letterQuantityExpected(letterMinQuantityExpected, letterMaxQuantityExpected)
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter, letterQuantityExpected)

            assert.strictEqual(resultAnalysisExpected, false)
        })
    })
})