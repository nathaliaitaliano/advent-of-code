const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('inputParser', function () {
    it('should return a array with a empty string given a passport data line empty', function () {
      const passportsInputData = [""]
      const passportDataExpected = [""]
      const passportData = inputParser.sanitize(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return a string with the passport field data given a passport data line that contains all fields', function () {
      const passportsInputData = ["iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1"]
      const passportDataExpected = ["iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1"]
      const passportData = inputParser.sanitize(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return a passport data for multiple passport inputs', function () {
      const passportsInputData = ["iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1", "", "pid:117915262 eyr:2023 byr:1925 iyr:2020 hcl:#888785"]
      const passportDataExpected = ["iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1", "pid:117915262 eyr:2023 byr:1925 iyr:2020 hcl:#888785"]
      const passportData = inputParser.sanitize(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return a passport data given a input data with multiples lines', function () {
      const passportsInputData = ["ecl:blu",
        "eyr:2026",
        "hcl:#efcc98",
        "byr:1980 iyr:2013",
        "hgt:161cm"]
      const passportDataExpected = ["ecl:blu eyr:2026 hcl:#efcc98 byr:1980 iyr:2013 hgt:161cm"]
      const passportData = inputParser.sanitize(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return 1 field object given 1 field passport data', function () {
      const passportsData = "ecl:gry"
      const passportsFieldsInformationExpected = { ecl: "gry" }
      const passportFieldsInformation = inputParser.parse(passportsData)

      assert.deepStrictEqual(passportsFieldsInformationExpected, passportFieldsInformation)
    })

    it('should return 2 fields objects given 2 fields passport data', function () {
      const passportsData = "ecl:gry hgt:183cm"
      const passportsFieldsInformationExpected = { ecl: "gry", hgt: "183cm" }
      const passportFieldsInformation = inputParser.parse(passportsData)

      assert.deepStrictEqual(passportsFieldsInformationExpected, passportFieldsInformation)
    })

    it('should return 8 fields objects given 8 fields passport data', function () {
      const passportsData = "pid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025"
      const passportsFieldsInformationExpected = { pid: "688706448", iyr: 2017, hgt: "162cm", cid: 174, ecl: "grn", byr: 1943, hcl: "#808e9e", eyr: 2025 }
      const passportFieldsInformation = inputParser.parse(passportsData)

      assert.deepStrictEqual(passportsFieldsInformationExpected, passportFieldsInformation)
    })
  })
})