/**
 * Looks for potential hotspot string comparisons
 * @author Adam Baldwin / Jon Lamendola
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

let keywords =
  '((' +
  ['password', 'secret', 'api', 'apiKey', 'token', 'auth', 'pass', 'hash'].join(
    ')|('
  ) +
  '))';

let re = new RegExp('^' + keywords + '$', 'im');

function containsKeyword(node) {
  if (node.type === 'Identifier') {
    if (re.test(node.name)) return true;
  }
}

export default function (context) {
  return {
    IfStatement: function (node) {
      if (node.test && node.test.type === 'BinaryExpression') {
        if (
          node.test.operator === '==' ||
          node.test.operator === '===' ||
          node.test.operator === '!=' ||
          node.test.operator === '!=='
        ) {
          if (node.test.left) {
            let left = containsKeyword(node.test.left);
            if (left) {
              return context.report(
                node,
                'Potential timing attack, left side: ' + left
              );
            }
          }

          if (node.test.right) {
            let right = containsKeyword(node.test.right);
            if (right) {
              return context.report(
                node,
                'Potential timing attack, right side: ' + right
              );
            }
          }
        }
      }
    },
  };
}
