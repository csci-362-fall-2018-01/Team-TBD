
/**************************TEST CASE 1******************************/

function test_safeName () {
	var varDB = new Blockly.Names('window,door');
	assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}

/**************************FAULT INJECTION 1*****************************

function test_safeName_ () {
	var varDB = new Blockly.Names('window;door');
	assertNull('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}
*/
