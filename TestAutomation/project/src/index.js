/**
 * testAutomation/project/src/index.js
 * created: 30-Oct-2018
 * updated: 9-Nov-2018
 * version: 0.0.4
 */

'use strict'

function test_safeName () {
	var varDB = new Blockly.Names('window,door');
	//const varDB = new Blockly.Names('%$@)<.*');
	//assertEquals('Is Safe Name', '%$@)<.*', varDB.safeName_('%$@)<.*'));
	assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));

}

function test_commonWordPrefix () {
	const words = [ 'aa', 'abc', 'de', 'gd', 'ax' ]; 
	const length = Blockly.utils.commonWordPrefix(words);
	
	assertEquals('Word prefix', 3, length);
}

function test_getVariableTypes () {
	variableMapTest_setUp();
	
	variable_map.createVariable('name1', 'type1', 'id1');
	variable_map.createVariable('name2', 'type2', 'id2');
	variable_map.createVariable('name3', 'type3', 'id3');
	
	const result = variable_map.getVariableTypes();
	
	isEqualArrays(['type1', 'type2', 'type3', ''], result);

	variableMapTest_tearDown();
}

function test_getVariableById () {
	workspaceTest_setUp();
	
	workspace.createVariable('name0', 'type0', 'id0');

	const variable = workspace.getVariableById('id0');
	
	assertEquals(variable.name, 'name0');

	workspaceTest_tearDown();
}

function test_getVariablesByType () {
	variableMapTest_setUp();
	
	const var1 = variable_map.createVariable('name1', 'type1', 'id1');
	const var2 = variable_map.createVariable('name2', 'type1', 'id2');

	const result = variable_map.getVariablesOfType('type1');
	
	isEqualArrays([ var1, var2 ], result);

	variableMapTest_tearDown();
}
