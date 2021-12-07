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

      it('should return, gammaRate value and epilsonRate value given a report', function () {
        const report = ["00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010"]
        const diagnosticExpected = { gammaRate: "10110", epilsonRate: "01001"}
        const result = binaryDiagnostic.generateDiagnostic(report)

        assert.deepEqual(result, diagnosticExpected)
      })
    })
})