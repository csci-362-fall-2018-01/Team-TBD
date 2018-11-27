
/**************************TEST CASE 2******************************/

function test_commonWordSuffix() {
  var len = Blockly.utils.commonWordSuffix('Xabc de,Yabc de'.split(','));
  assertEquals('One word', 3, len);
}

/**************************FAULT INJECTION 2*****************************

function test_CommonWordSuffix() {
  var len = Blockly.utils.commonWordSuffix('Xabc de,Yabc de'.split('.'));
  assertEquals('One word', 3, len);
}
*/
