
/**************************TEST CASE 23******************************/
function testInit_NullId() {
  variableModelTest_setUp();
  variable = new Blockly.VariableModel(workspace, 'test', 'test_type', null);
  assertNotNull('Not Null',variable.id_);
  variableModelTest_tearDown();
}
