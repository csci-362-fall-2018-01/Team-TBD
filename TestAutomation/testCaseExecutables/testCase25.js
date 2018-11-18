
/**************************TEST CASE 25******************************/

function test_getVariable_ByNameAndType() {
  variableMapTest_setUp();
  var var_1 = variable_map.createVariable('CSCI362', 'string', 'TBD');
  var result_1 = variable_map.getVariable('CSCI362', 'string');

  // Searching by name + type is correct.
  assertEquals('Variable is found',var_1, result_1);

  variableMapTest_tearDown();
}
