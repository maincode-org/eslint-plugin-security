import Rule from '../rules/detect-new-buffer.js';
import { RuleTester } from 'eslint';
const tester = new RuleTester();

const ruleName = 'detect-new-buffer';
const invalid = 'var a = new Buffer(c)';

tester.run(ruleName, Rule, {
  valid: [{ code: "var a = new Buffer('test')" }],
  invalid: [
    {
      code: invalid,
      errors: [{ message: 'Found new Buffer' }],
    },
  ],
});
