'use strict'


/**************************TEST CASE 7******************************/

function test_shortestStringLength() {
  var len = Blockly.utils.shortestStringLength([]);
  assertEquals('Empty list', 0, len);
}
