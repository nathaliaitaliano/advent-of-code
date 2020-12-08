const assert = require('assert');
const passwordPhilosophy = require('../passwordPhilosophy');

describe('PasswprdPhilosophy', function () {
    describe('findLetter', function () {
        it('should return FALSE given a password without the letter A', function () {
            const letter = "a";
            const password = "dog";
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter);

            assert.strictEqual(resultAnalysisExpected, false);
        });

        it('should return TRUE given a password with the letter K', function () {
            const letter = "k";
            const password = "hacker";
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter);

            assert.strictEqual(resultAnalysisExpected, true);
        });

    });
});