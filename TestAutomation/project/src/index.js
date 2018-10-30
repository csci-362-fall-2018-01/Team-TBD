/**
 * testAutomation/project/src/index.js
 * created: 30-Oct-2018
 * updated: 30-Oct-2018
 * version: 0.0.2
 */

'use strict'

function safeName () {
	const varDB = new Blockly.Names('%$@)<.*');
	assertEquals('Is Safe Name', '%$@)<.*', varDB.safeName_('%$@)<.*'));
}

function commonWordPrefix () {
	const words = [ 'aa', 'abc', 'de', 'gd', 'ax' ]; 
	const length = Blockly.utils.commonWordPrefix(words);
	
	assertEquals('Word prefix', 3, length);
}

function getVariableTypes () {
	variableMapTest_setUp();
	
	variable_map.createVariable('name1', 'type1', 'id1');
	variable_map.createVariable('name2', 'type2', 'id2');
	variable_map.createVariable('name3', 'type3', 'id3');
	
	const result = variable_map.getVariableTypes();
	
	isEqualArrays(['type1', 'type2', 'type3', ''], result);

	variableMapTest_tearDown();
}

function getVariableById () {
	workspaceTest_setUp();
	
	workspace.createVariable('name0', 'type0', 'id0');

	const variable = workspace.getVariableById('id0');
	
	assertEquals(variable.name, 'name0');

	workspaceTest_tearDown();
}

function getVariablesByType () {
	variableMapTest_setUp();
	
	const var1 = variable_map.createVariable('name1', 'type1', 'id1');
	const var2 = variable_map.createVariable('name2', 'type1', 'id2');

	const result = variable_map.getVariablesOfType('type1');
	
	isEqualArrays([ var1, var2 ], result);

	variableMapTest_tearDown();
}
