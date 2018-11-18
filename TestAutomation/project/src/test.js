/**
 * testAutomation/project/src/index.js
 * created: 30-Oct-2018
 * updated: 14-Nov-2018
 * version: 0.0.6
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
	assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}

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
