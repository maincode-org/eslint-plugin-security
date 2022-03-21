/** eslint-plugin-security - ESLint plugin for Node Security */

export default {
  rules: {
    'detect-unsafe-regex': import('./rules/detect-unsafe-regex.js'),
    'detect-non-literal-regexp': import('./rules/detect-non-literal-regexp.js'),
    'detect-non-literal-require': import('./rules/detect-non-literal-require'),
    'detect-non-literal-fs-filename': import(
      './rules/detect-non-literal-fs-filename'
    ),
    'detect-eval-with-expression': import(
      './rules/detect-eval-with-expression'
    ),
    'detect-pseudoRandomBytes': import('./rules/detect-pseudoRandomBytes'),
    'detect-possible-timing-attacks': import(
      './rules/detect-possible-timing-attacks'
    ),
    'detect-no-csrf-before-method-override': import(
      './rules/detect-no-csrf-before-method-override'
    ),
    'detect-buffer-noassert': import('./rules/detect-buffer-noassert'),
    'detect-child-process': import('./rules/detect-child-process'),
    'detect-disable-mustache-escape': import(
      './rules/detect-disable-mustache-escape'
    ),
    'detect-object-injection': import('./rules/detect-object-injection'),
    'detect-new-buffer': import('./rules/detect-new-buffer'),
  },
  rulesConfig: {
    'detect-unsafe-regex': 0,
    'detect-non-literal-regexp': 0,
    'detect-non-literal-require': 0,
    'detect-non-literal-fs-filename': 0,
    'detect-eval-with-expression': 0,
    'detect-pseudoRandomBytes': 0,
    'detect-possible-timing-attacks': 0,
    'detect-no-csrf-before-method-override': 0,
    'detect-buffer-noassert': 0,
    'detect-child-process': 0,
    'detect-disable-mustache-escape': 0,
    'detect-object-injection': 0,
    'detect-new-buffer': 0,
  },
  configs: {
    recommended: {
      plugins: ['security'],
      rules: {
        'security/detect-buffer-noassert': 'warn',
        'security/detect-child-process': 'warn',
        'security/detect-disable-mustache-escape': 'warn',
        'security/detect-eval-with-expression': 'warn',
        'security/detect-new-buffer': 'warn',
        'security/detect-no-csrf-before-method-override': 'warn',
        'security/detect-non-literal-fs-filename': 'warn',
        'security/detect-non-literal-regexp': 'warn',
        'security/detect-non-literal-require': 'warn',
        'security/detect-object-injection': 'warn',
        'security/detect-possible-timing-attacks': 'warn',
        'security/detect-pseudoRandomBytes': 'warn',
        'security/detect-unsafe-regex': 'warn',
      },
    },
  },
};
