
/**************************TEST CASE 5*****************************

function test_nameEquals() {
  assertTrue('Names equal.', Blockly.Names.equals('Foo.bar', 'Foo.bar'));
}
*/

/**************************FAULT INJECTION 5******************************/

function testnameEquals() {
  assertTrue('Names equal.', Blockly,Names.equals('Foo.bar', 'Foo.bar'));
}

