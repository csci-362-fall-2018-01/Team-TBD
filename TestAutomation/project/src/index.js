/**
 * testAutomation/project/src/index.js
 * created: 30-Oct-2018
 * updated: 11-Nov-2018
 * version: 0.0.5
 */

'use strict'

goog.require('goog.testing');
goog.require('goog.testing.MockControl');

var variable_map;
var mockControl_;
var workspace;

function variableMapTest_setUp() {
  workspace = new Blockly.Workspace();
  variable_map = new Blockly.VariableMap(workspace);
  mockControl_ = new goog.testing.MockControl();
}

function variableMapTest_tearDown() {
  workspace.dispose();
  mockControl_.$tearDown();
  variable_map = null;
}

function workspaceTest_setUp() {
  defineGetVarBlock();
  workspace = new Blockly.Workspace();
  mockControl_ = new goog.testing.MockControl();
}

function workspaceTest_tearDown() {
  undefineGetVarBlock();
  mockControl_.$tearDown();
  workspace.dispose();
}

/**************************TEST CASE 1******************************/

function test_safeName () {
	var varDB = new Blockly.Names('window,door');
	//assertEquals('Is Safe Name', 'fooBar', varDB.safeName_(test));
	assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
	//assertEquals('SafeName special chars.', '_______', varDB.safeName_('%$@)<.*'));
}

//test_safeName ('fooBar'); 

/**************************TEST CASE 2******************************/

function test_commonWordSuffix() {
  var len = Blockly.utils.commonWordSuffix('Xabc de,Yabc de'.split(','));
  assertEquals('One word', 3, len);
}

/**************************TEST CASE 3******************************/

function test_getName() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name add #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
  assertEquals('Name get #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
}

/**************************TEST CASE 4******************************/

function test_getDistinctName() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name distinct #1.', 'Foo_bar',
               varDB.getDistinctName('Foo.bar', 'var'));
}

/**************************TEST CASE 5******************************/

function test_nameEquals() {
  assertTrue('Names equal.', Blockly.Names.equals('Foo.bar', 'Foo.bar'));
}

/**************************TEST CASE 6******************************/

function test_commonWordPrefix() {
	var len = Blockly.utils.commonWordPrefix('abc de,abc de Y'.split(','));
  	assertEquals('Overflow yes', 6, len);
}

/**************************TEST CASE 7******************************/

function test_shortestStringLength() {
  var len = Blockly.utils.shortestStringLength([]);
  assertEquals('Empty list', 0, len);
}

/**************************TEST CASE 8******************************/

function test_startsWith() {
  assertEquals('Does not start with', false, Blockly.utils.startsWith('123', '2'));
}

/**************************TEST CASE 9******************************/

function test_arrayRemove() {
  var arr = [1, 2, 3, 2];
  assertEquals('Remove item', true, Blockly.utils.arrayRemove(arr, 2));
}

/**************************TEST CASE 10******************************/

function test_getVariable_NotFound() {
  variableMapTest_setUp();
  var result = variable_map.getVariable('name1');
  assertNull(result);
  variableMapTest_tearDown();
}

/*function test_getVariableTypes_Trivial () {
	variableMapTest_setUp();
  	variable_map.createVariable('name1', 'type1', 'id1');
  	variable_map.createVariable('name2', 'type1', 'id2');
  	variable_map.createVariable('name3', 'type2', 'id3');
  	variable_map.createVariable('name4', 'type3', 'id4');
  	var result_array = variable_map.getVariableTypes();
  	// The empty string is always an option.
  	isEqualArrays(['type1', 'type2', 'type3', ''], result_array);
  	variableMapTest_tearDown();
}

function test_getVariableById_Trivial () {
	variableMapTest_setUp();
  	var var_1 = variable_map.createVariable('name1', 'type1', 'id1');
  	var result_1 = variable_map.getVariableById('id1');

  	assertEquals(var_1, result_1);
  	variableMapTest_tearDown();
}

function test_getVariablesOfType_Trivial () {
	variableMapTest_setUp();
  	var var_1 = variable_map.createVariable('name1', 'type1', 'id1');
  	var var_2 = variable_map.createVariable('name2', 'type1', 'id2');
  	variable_map.createVariable('name3', 'type2', 'id3');
  	variable_map.createVariable('name4', 'type3', 'id4');
  	var result_array_1 = variable_map.getVariablesOfType('type1');
  	var result_array_2 = variable_map.getVariablesOfType('type5');
  	isEqualArrays([var_1, var_2], result_array_1);
  	isEqualArrays([], result_array_2);
  	variableMapTest_tearDown();
}*/
