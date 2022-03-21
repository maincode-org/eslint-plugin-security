import safe from 'safe-regex';
/**
 * Check if the regex is evil or not using the safe-regex module
 * @author Adam Baldwin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default function (context) {
  return {
    Literal: function (node) {
      let token = context.getTokens(node)[0],
        nodeType = token.type,
        nodeValue = token.value;

      if (nodeType === 'RegularExpression') {
        if (!safe(nodeValue)) {
          context.report(node, 'Unsafe Regular Expression');
        }
      }
    },
    NewExpression: function (node) {
      if (
        node.callee.name === 'RegExp' &&
        node.arguments &&
        node.arguments.length > 0 &&
        node.arguments[0].type === 'Literal'
      ) {
        if (!safe(node.arguments[0].value)) {
          context.report(node, 'Unsafe Regular Expression (new RegExp)');
        }
      }
    },
  };
}
