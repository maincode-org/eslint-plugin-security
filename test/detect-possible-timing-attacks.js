import Rule from '../rules/detect-possible-timing-attacks.js';
import { RuleTester } from 'eslint';
const tester = new RuleTester();

const ruleName = 'detect-possible-timing-attacks';

const valid = 'if (age === 5) {}';
const invalidLeft = "if (password === 'mypass') {}";
const invalidRight = "if ('mypass' === password) {}";

// We only check with one string "password" and operator "==="
// to KISS.

tester.run(`${ruleName} (left side)`, Rule, {
  valid: [{ code: valid }],
  invalid: [
    {
      code: invalidLeft,
      errors: [{ message: 'Potential timing attack, left side: true' }],
    },
  ],
});

tester.run(`${ruleName} (right side)`, Rule, {
  valid: [{ code: valid }],
  invalid: [
    {
      code: invalidRight,
      errors: [{ message: 'Potential timing attack, right side: true' }],
    },
  ],
});
