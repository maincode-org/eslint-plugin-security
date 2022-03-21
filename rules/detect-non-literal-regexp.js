/**
 * Tries to detect RegExp's created from non-literal strings.
 * @author Jon Lamendola
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default function (context) {
  return {
    NewExpression: function (node) {
      if (node.callee.name === 'RegExp') {
        let args = node.arguments;
        if (args && args.length > 0 && args[0].type !== 'Literal') {
          return context.report(
            node,
            'Found non-literal argument to RegExp Constructor'
          );
        }
      }
    },
  };
}
