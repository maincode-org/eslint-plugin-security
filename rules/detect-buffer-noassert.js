/**
 * Tries to detect buffer read / write calls that use noAssert set to true
 * @author Adam Baldwin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

// var names = [];

export default function (context) {
  'use strict';

  let read = [
    'readUInt8',
    'readUInt16LE',
    'readUInt16BE',
    'readUInt32LE',
    'readUInt32BE',
    'readInt8',
    'readInt16LE',
    'readInt16BE',
    'readInt32LE',
    'readInt32BE',
    'readFloatLE',
    'readFloatBE',
    'readDoubleL',
    'readDoubleBE',
  ];

  let write = [
    'writeUInt8',
    'writeUInt16LE',
    'writeUInt16BE',
    'writeUInt32LE',
    'writeUInt32BE',
    'writeInt8',
    'writeInt16LE',
    'writeInt16BE',
    'writeInt32LE',
    'writeInt32BE',
    'writeFloatLE',
    'writeFloatBE',
    'writeDoubleLE',
    'writeDoubleBE',
  ];

  return {
    MemberExpression: function (node) {
      let index;
      if (read.indexOf(node.property.name) !== -1) {
        index = 1;
      } else if (write.indexOf(node.property.name) !== -1) {
        index = 2;
      }

      if (
        index &&
        node.parent &&
        node.parent.arguments &&
        node.parent.arguments[index] &&
        node.parent.arguments[index].value
      ) {
        // var token = context.getTokens(node)[0];
        return context.report(
          node,
          'Found Buffer.' + node.property.name + ' with noAssert flag set true'
        );
      }
    },
  };
}
