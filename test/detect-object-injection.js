import Rule from '../rules/detect-object-injection.js';
import { RuleTester } from 'eslint';
const tester = new RuleTester();

const ruleName = 'detect-object-injection';

const valid = 'var a = {};';
// const invalidVariable = "TODO";
// const invalidFunction = "TODO";
const invalidGeneric = 'var a = {}; a[b] = 4';

// TODO
// tester.run(`${ruleName} (Variable Assigned to)`, Rule, {
//   valid: [{ code: valid }],
//   invalid: [
//     {
//       code: invalidVariable,
//       errors: [{ message: 'Variable Assigned to Object Injection Sink' }]
//     }
//   ]
// });
//
//
// tester.run(`${ruleName} (Function)`, Rule, {
//   valid: [{ code: valid }],
//   invalid: [
//     {
//       code: invalidFunction,
//       errors: [{ message: `Variable Assigned to Object Injection Sink: <input>: 1\n\t${invalidFunction}\n\n` }]
//     }
//   ]
// });

tester.run(`${ruleName} (Generic)`, Rule, {
  valid: [{ code: valid }],
  invalid: [
    {
      code: invalidGeneric,
      errors: [{ message: 'Generic Object Injection Sink' }],
    },
  ],
});
