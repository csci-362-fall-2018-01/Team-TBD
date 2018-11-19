
/**************************TEST CASE 22******************************/
function testInit_UndefinedType() {
  variableModelTest_setUp();
  variable = new Blockly.VariableModel(workspace, 'test', undefined, 'test_id');
  assertEquals('Undefined Type','', variable.type);
  variableModelTest_tearDown();
}
