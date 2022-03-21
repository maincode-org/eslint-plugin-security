/**
 * Tries to detect calls to require with non-literal argument
 * @author Adam Baldwin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default function (context) {
  return {
    CallExpression: function (node) {
      if (node.callee.name === 'require') {
        let args = node.arguments;
        if (args && args.length > 0 && args[0].type !== 'Literal') {
          return context.report(node, 'Found non-literal argument in require');
        }
      }
    },
  };
}
