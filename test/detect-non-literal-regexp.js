import Rule from '../rules/detect-non-literal-regexp.js';
import { RuleTester } from 'eslint';
const tester = new RuleTester();

const ruleName = 'detect-non-literal-regexp';
const invalid = "var a = new RegExp(c, 'i')";

tester.run(ruleName, Rule, {
  valid: [{ code: "var a = new RegExp('ab+c', 'i')" }],
  invalid: [
    {
      code: invalid,
      errors: [{ message: 'Found non-literal argument to RegExp Constructor' }],
    },
  ],
});
