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
