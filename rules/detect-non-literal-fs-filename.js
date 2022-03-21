/**
 * Tries to detect calls to fs functions that take a non Literal value as the filename parameter
 * @author Adam Baldwin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let fsMetaData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './data/fsFunctionData.json'))
);
let funcNames = Object.keys(fsMetaData);

export default function (context) {
  return {
    MemberExpression: function (node) {
      let result = [];
      if (funcNames.indexOf(node.property.name) !== -1) {
        let meta = fsMetaData[node.property.name];
        let args = node.parent.arguments;
        meta.forEach(function (i) {
          if (args && args.length > i) {
            if (args[i].type !== 'Literal') {
              result.push(i);
            }
          }
        });
      }

      if (result.length > 0) {
        return context.report(
          node,
          'Found fs.' +
            node.property.name +
            ' with non literal argument at index ' +
            result.join(',')
        );
      }

      /*
            if (node.parent && node.parent.arguments && node.parent.arguments[index].value) {
                return context.report(node, 'found Buffer.' + node.property.name + ' with noAssert flag set true');
            }
      */
    },
  };
}
