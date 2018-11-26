/**
 * testAutomation/project/src/index.js
 * created: 30-Oct-2018
 * updated: 19-Nov-2018
 * version: 0.0.7
 */

'use strict'

goog.require('goog.testing');
goog.require('goog.testing.MockControl');

var variable_map;
var mockControl_;
var workspace;
var variable;

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

function variableModelTest_setUp() {
  workspace = new Blockly.Workspace();
}

function variableModelTest_tearDown() {
  workspace.dispose();
  variable = null;
}

/**************************TEST CASE 1*****************************

function test_safeName () {
	var varDB = new Blockly.Names('window,door');
	assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}
*/

/**************************FAULT INJECTION 1******************************/

function test_safeName_ () {
	var varDB = new Blockly.Names('window;door');
	assertNull('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}

/**************************TEST CASE 2*****************************

function test_commonWordSuffix() {
  var len = Blockly.utils.commonWordSuffix('Xabc de,Yabc de'.split(','));
  assertEquals('One word', 3, len);
}
*/

/**************************FAULT INJECTION 2******************************/

function test_CommonWordSuffix() {
  var len = Blockly.utils.commonWordSuffix('Xabc de,Yabc de'.split('.'));
  assertEquals('One word', 3, len);
}

/**************************TEST CASE 3*****************************

function test_getName() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name add #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
  assertEquals('Name get #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
}
*/

/**************************FAULT INJECTION 3******************************/

function test_GETNAME() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name add #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
  assertNotEquals('Name get #1.', 'Foo_bar', varDB.getName('Foo.bar', 'var'));
}



/**************************TEST CASE 4*****************************

function test_getDistinctName() {
  var varDB = new Blockly.Names('window,door');
  assertEquals('Name distinct #1.', 'Foo_bar',
               varDB.getDistinctName('Foo.bar', 'var'));
}
*/

/**************************FAULT INJECTION 4******************************/

function test_getDistinctName() {
  var varDB = new Blockly.Names('window,door');
  assertNotEquals('Name distinct #1.', 'Foo_bar',
               varDB.getDistinctName('Foo.bar', 'var'));
}


/**************************TEST CASE 5*****************************

function test_nameEquals() {
  assertTrue('Names equal.', Blockly.Names.equals('Foo.bar', 'Foo.bar'));
}
*/

/**************************FAULT INJECTION 5******************************/

function testnameEquals() {
  assertTrue('Names equal.', Blockly,Names.equals('Foo.bar', 'Foo.bar'));
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


/**************************TEST CASE 11******************************/

function test_appendField_simple() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var field1 = new Blockly.FieldLabel('#1');

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Tests
  input.appendField(field1, 'first');
  assertEquals('appended', block, field1.sourceBlock_);
}

/**************************TEST CASE 12******************************/

function test_appendField_string() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var labelText = 'label';

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Tests
  input.appendField(labelText, 'name');
  assertEquals('string is appended', 'name', input.fieldRow[0].name);
}

/**************************TEST CASE 13******************************/

function test_appendField_prefix() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var prefix = new Blockly.FieldLabel('prefix');
  var field = new Blockly.FieldLabel('field');
  field.prefixField = prefix;

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Test
  input.appendField(field);
  assertEquals('appended', prefix, input.fieldRow[0]);
}

/**************************TEST CASE 14******************************/

function test_appendField_suffix() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var suffix = new Blockly.FieldLabel('suffix');
  var field = new Blockly.FieldLabel('field');
  field.suffixField = suffix;

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Test
  input.appendField(field);
  assertEquals('appended', suffix, input.fieldRow[1]);
}

/**************************TEST CASE 15******************************/

function test_insertFieldAt_simple() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var before = new Blockly.FieldLabel('before');
  var after = new Blockly.FieldLabel('after');
  var between = new Blockly.FieldLabel('between');
  input.appendField(before);
  input.appendField(after);

  // Preconditions
  assertEquals(2, input.fieldRow.length);
  assertEquals(before, input.fieldRow[0]);
  assertEquals(after, input.fieldRow[1]);

  // Test
  assertEquals('inserted', before, input.fieldRow[0]);
}

/**************************TEST CASE 16******************************/

function test_addClass() 
{
	var p = document.createElement('p');
  	Blockly.utils.addClass(p, 'one');
	assertEquals('Added "one"', 'one', p.className);
}

/**************************TEST CASE 17******************************/

function test_hasClass() 
{
   	var p = document.createElement('p');
	p.className = ' one three  two three  ';
	assertTrue('Has "three"', Blockly.utils.hasClass(p, 'three'));
}

/**************************TEST CASE 18******************************/

function test_toDegrees() 
{
  	var quarter = Math.PI / 2;
	assertEquals('450', 360 + 90, Blockly.utils.toDegrees(5 * quarter));
}

/**************************TEST CASE 19******************************/


function test_insertFieldAt_string() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var before = new Blockly.FieldLabel('before');
  var after = new Blockly.FieldLabel('after');
  var labelText = 'label';
  input.appendField(before);
  input.appendField(after);

  // Preconditions
  assertEquals(2, input.fieldRow.length);
  assertEquals(before, input.fieldRow[0]);
  assertEquals(after, input.fieldRow[1]);

  // Test
  assertEquals('inserted', before, input.fieldRow[0]);
}

/**************************TEST CASE 20******************************/


function test_insertFieldAt_prefix() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var before = new Blockly.FieldLabel('before');
  var after = new Blockly.FieldLabel('after');
  var prefix = new Blockly.FieldLabel('prefix');
  var between = new Blockly.FieldLabel('between');
  between.prefixField = prefix;
  input.appendField(before);
  input.appendField(after);

  // Preconditions
  assertEquals(2, input.fieldRow.length);
  assertEquals(before, input.fieldRow[0]);
  assertEquals(after, input.fieldRow[1]);
 
  // Test
  assertEquals('inserted', before, input.fieldRow[0]);
}

/**************************TEST CASE 21******************************/
function testInit_NullType() {
  variableModelTest_setUp();
  variable = new Blockly.VariableModel(workspace, 'test', null, 'test_id');
  assertEquals('Null Type','', variable.type);
  variableModelTest_tearDown();
}

/**************************TEST CASE 22******************************/
function testInit_UndefinedType() {
  variableModelTest_setUp();
  variable = new Blockly.VariableModel(workspace, 'test', undefined, 'test_id');
  assertEquals('Undefined Type','', variable.type);
  variableModelTest_tearDown();
}

/**************************TEST CASE 23******************************/
function testInit_NullId() {
  variableModelTest_setUp();
  variable = new Blockly.VariableModel(workspace, 'test', 'test_type', null);
  assertNotNull('Not Null',variable.id_);
  variableModelTest_tearDown();
}

/**************************TEST CASE 24******************************/

function testInit_Trivial() {
  var workspace = new Blockly.Workspace();
  var variable = new Blockly.VariableModel(workspace, 'TBD', 'string',
    'TBD_id');

  assertEquals('Is Correct Name','TBD', variable.name);
  assertEquals('Is Correct Type','string', variable.type);
  assertEquals('IS Correct ID','TBD_id', variable.id_);
  
  workspace.dispose();
  variable = null;
}

/**************************TEST CASE 25******************************/

function test_getVariable_ByNameAndType() {
  variableMapTest_setUp();
  var var_1 = variable_map.createVariable('CSCI362', 'string', 'TBD');
  var result_1 = variable_map.getVariable('CSCI362', 'string');

  // Searching by name + type is correct.
  assertEquals('Variable is found',var_1, result_1);

  variableMapTest_tearDown();
}
