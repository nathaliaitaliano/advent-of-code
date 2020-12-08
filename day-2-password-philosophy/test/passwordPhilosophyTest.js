const assert = require('assert');
const passwordPhilosophy = require('../passwordPhilosophy');

describe('PasswprdPhilosophy', function () {
    describe('findLetter', function () {
        it('should return FALSE given a password without the letter A', function () {
            const letter = "a";
            const password = "bcdefg";
            const resultAnalysisExpected = passwordPhilosophy.analyse(password, letter);

            assert.strictEqual(resultAnalysisExpected, false);
        });
    });
});