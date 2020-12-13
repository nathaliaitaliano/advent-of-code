const assert = require('assert')
const inputParser = require('../inputParser')

describe('InputParser', function () {
  describe('inputParser', function () {
    it('should return 1 field object given 1 field passport data', function () {
      const passportsInputData = "ecl:gry"
      const passportDataExpected = { ecl: 'gry' }
      const passportData = inputParser.parse(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return 2 fields objects given 2 fields passport data', function () {
      const passportsInputData = "ecl:gry hgt:183cm"
      const passportDataExpected = { ecl: 'gry', hgt: '183cm' }
      const passportData = inputParser.parse(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return 8 fields objects given 8 fields passport data', function () {
      const passportsInputData = "pid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025"
      const passportDataExpected = { pid: "688706448", iyr: "2017", hgt: "162cm", cid: "174", ecl: "grn", byr: "1943", hcl: "#808e9e", eyr: "2025" }
      const passportData = inputParser.parse(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })

    it('should return the fields objects for the second passport data given 2 passports data', function () {
      const passportsInputData = ["iyr:2015 cid:189 ecl:oth byr:1947 hcl:#6c4ab1 eyr:2026 \n hgt:174cm \n pid:526744288 \n \r \n pid:688706448 iyr:2017 hgt:162cm cid:174 ecl:grn byr:1943 hcl:#808e9e eyr:2025"]
      const passportDataExpected = { "passport0": { pid: "688706448", iyr: "2017", hgt: "162cm", cid: "174", ecl: "grn", byr: "1943", hcl: "#808e9e", eyr: "2025" } }
      const passportData = inputParser.parse(passportsInputData)

      assert.deepStrictEqual(passportDataExpected, passportData)
    })
  })
})