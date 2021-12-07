const assert = require('assert')
const binaryDiagnostic = require('../binaryDiagnostic')

describe('BinaryDiagnostic', function () {
    describe('generateDiagnostic', function () {
      it('should return the bit mostly common as gammaRate value and the last common bit as epilsonRate value given a report', function () {
        const report = ["0", "1", "1"]
        const diagnosticExpected = { gammaRate: "1", epilsonRate: "0"}
        const result = binaryDiagnostic.generateDiagnostic(report)

        assert.deepEqual(result, diagnosticExpected)
      })

      it('should return, for each column of a binary number, the bit mostly common as gammaRate value and the last common bit as epilsonRate value given a report', function () {
        const report = ["00", "11", "10"]
        const diagnosticExpected = { gammaRate: "10", epilsonRate: "01"}
        const result = binaryDiagnostic.generateDiagnostic(report)

        assert.deepEqual(result, diagnosticExpected)
      })
    })
})