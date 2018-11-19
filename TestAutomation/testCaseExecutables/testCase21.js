
/**************************TEST CASE 21******************************/
function testInit_NullType() {
  variableModelTest_setUp();
  variable = new Blockly.VariableModel(workspace, 'test', null, 'test_id');
  assertEquals('Null Type','', variable.type);
  variableModelTest_tearDown();
}
