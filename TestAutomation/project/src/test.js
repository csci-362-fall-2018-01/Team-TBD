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

function test_appendField_simple() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var field1 = new Blockly.FieldLabel('#1');

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Actual Tests
  input.appendField(field1, 'first');
  assertEquals(1, input.fieldRow.length);
  assertEquals(field1, input.fieldRow[0]);
  assertEquals('first', input.fieldRow[0].name);
  assertEquals(block, field1.sourceBlock_);
}
function test_appendField_string() {
  var ws = new Blockly.Workspace();
  var block = new Blockly.Block(ws);
  var input = new Blockly.Input(Blockly.DUMMY_INPUT, 'INPUT', block);
  var labelText = 'label';

  // Preconditions
  assertEquals(0, input.fieldRow.length);

  // Actual Tests
  input.appendField(labelText, 'name');
  assertEquals(1, input.fieldRow.length);
  assertEquals(Blockly.FieldLabel, input.fieldRow[0].constructor);
  assertEquals(labelText, input.fieldRow[0].getValue());
  assertEquals('name', input.fieldRow[0].name);
}
