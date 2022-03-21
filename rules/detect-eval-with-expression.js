/**
 * Identifies eval with expression
 * @author Adam Baldwin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default function (context) {
  return {
    CallExpression: function (node) {
      if (node.callee.name === 'eval' && node.arguments[0].type !== 'Literal') {
        context.report(
          node,
          'eval with argument of type ' + node.arguments[0].type
        );
      }
    },
  };
}
