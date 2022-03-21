import Rule from '../rules/detect-pseudoRandomBytes.js';
import { RuleTester } from 'eslint';
const tester = new RuleTester();

const ruleName = 'detect-pseudoRandomBytes';
const invalid = 'crypto.pseudoRandomBytes';

tester.run(ruleName, Rule, {
  valid: [{ code: 'crypto.randomBytes' }],
  invalid: [
    {
      code: invalid,
      errors: [
        {
          message:
            'Found crypto.pseudoRandomBytes which does not produce cryptographically strong numbers',
        },
      ],
    },
  ],
});
