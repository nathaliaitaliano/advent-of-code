const assert = require('assert')
const passwordPhilosophy = require('../passwordPhilosophy')

describe('PasswprdPhilosophy', function () {
    describe('findLetter', function () {
        it('should return FALSE given a password without the letter A', function () {
            const letter = "a"
            const password = "dog"
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter)

            assert.strictEqual(resultAnalysisExpected, false)
        })

        it('should return TRUE given a password with the letter K', function () {
            const letter = "k"
            const password = "hacker"
            const letterQuantityExpected = 1
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter, letterQuantityExpected )

            assert.strictEqual(resultAnalysisExpected, true)
        })

        it('should return TRUE given a password have 2 letters F', function () {
            const letter = "f"
            const password = "falafel"
            const letterQuantityExpected = 2
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter, letterQuantityExpected)

            assert.strictEqual(resultAnalysisExpected, true)
        })

        it('should return FALSE given a password without 3 letters N', function () {
            const letter = "n"
            const password = "never"
            const letterQuantityExpected = 3
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter, letterQuantityExpected)

            assert.strictEqual(resultAnalysisExpected, false)
        })
    })
})