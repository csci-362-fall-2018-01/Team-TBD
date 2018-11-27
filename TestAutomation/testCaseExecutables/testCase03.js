
/**************************TEST CASE 3******************************/

function test_getName() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name add #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
  assertEquals('Name get #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
}


/**************************FAULT INJECTION 3*****************************

function test_GETNAME() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name add #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
  assertNotEquals('Name get #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
}
*/
